from typing import List, Optional, Tuple
from enum import Enum

import subprocess
import os
import glob
import shutil

from shnootalk_playground_server.dirctx import dirctx


C_COMPILER = 'clang'
SHNOOTALK_COMPILER = 'shtkc'


class Result(str, Enum):
    SUCCESS = 'SUCCESS'
    EXEC_TIMEDOUT = 'EXEC_TIMEDOUT'
    CLANG_LINK_TIMEDOUT = 'CLANG_LINK_TIMEDOUT'
    CLANG_LINK_FAILED = 'CLANG_LINK_FAILED'
    COMPILE_FAILED = 'COMPILE_FAILED'
    COMPILE_TIMEDOUT = 'COMPILE_TIMEDOUT'


def run_subprocess(command: List[str],
                   input_str: str = '',
                   timeout: int = 5) -> Tuple[bool, Optional[str], Optional[int]]:
    try:
        subp = subprocess.run(command, capture_output=True, text=True,
                              timeout=timeout, input=input_str)

    except subprocess.TimeoutExpired:
        return True, None, None

    return False, subp.stdout+subp.stderr, subp.returncode


def run_program(file_name: str, input_str: str, timeout: int) -> Tuple[Result, Optional[str]]:
    # Remove all object files before running the test
    os.system('rm -f *.o')
    os.system('rm -f ./test')

    # Run the compiler
    compile_command = [SHNOOTALK_COMPILER, file_name, '-c']
    timedout, compiler_output, compiler_retcode = run_subprocess(
        compile_command, input_str, timeout
    )

    if timedout:
        return Result.COMPILE_TIMEDOUT, None

    # If there was a compilation error, return the error message from the compiler
    if compiler_retcode != 0:
        return Result.COMPILE_FAILED, compiler_output

    # Link object file into an executable
    object_files = glob.glob("*.o")
    link_command = [C_COMPILER] + object_files + ['-o', 'prog', '-lm']
    timedout, clang_output, clang_retcode = run_subprocess(link_command)

    if timedout:
        return Result.CLANG_LINK_TIMEDOUT, None

    # If there is a linking error, return error message from clang
    if clang_retcode != 0:
        return Result.CLANG_LINK_FAILED, clang_output

    # Run the executable and return the output from the executable
    timedout, exec_output, _ = run_subprocess(['./prog'], input_str)

    if timedout:
        return Result.EXEC_TIMEDOUT, None

    # If the program/executable did not timeout, return program output
    return Result.SUCCESS, exec_output


def compile_shnootalk(work_dir: str, timeout: int, prog_input: str = "") -> Tuple[Result, Optional[str]]:
    with dirctx(work_dir):
        result, output = run_program('main.shtk', prog_input, timeout)

    return result, output
