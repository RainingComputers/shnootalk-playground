from typing import List, Optional, Tuple
from enum import Enum


import subprocess
import os
import glob
import shutil


class Config:
    TIMEOUT = int(os.getenv('TIMEOUT', default='10'))
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
                   input_str: str = '') -> Tuple[bool, Optional[str], Optional[int]]:
    try:
        subp = subprocess.run(command, capture_output=True, text=True,
                              timeout=Config.TIMEOUT, input=input_str)

    except subprocess.TimeoutExpired:
        return True, None, None

    return False, subp.stdout+subp.stderr, subp.returncode


def run_program(file_name: str, input_str: str) -> Tuple[Result, Optional[str]]:
    # Remove all object files before running the test
    os.system('rm -f *.o')
    os.system('rm -f ./test')

    # Run the compiler
    compile_command = [Config.SHNOOTALK_COMPILER, file_name, '-c']
    timedout, compiler_output, compiler_retcode = run_subprocess(compile_command)

    if timedout:
        return Result.COMPILE_TIMEDOUT, None

    # If there was a compilation error, return the error message from the compiler
    if compiler_retcode != 0:
        return Result.COMPILE_FAILED, compiler_output

    # Link object file into an executable
    object_files = glob.glob("*.o")
    link_command = [Config.C_COMPILER] + object_files + ['-o', 'prog', '-lm']
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


def list_files_only(dir_path: str) -> List[str]:
    return [f for f in os.listdir(dir_path) if os.path.isfile(os.path.join(dir_path, f))]


def copy_program_files_and_cwd(configmap_dir: str, work_dir: str) -> None:
    for file in list_files_only(configmap_dir):
        shutil.copy(os.path.join(configmap_dir, file), os.path.join(work_dir, file))

    os.chdir(work_dir)


def get_string_from_file(file_name: str) -> str:
    if not os.path.exists(file_name):
        return ''

    return open(file_name, encoding='utf-8').read()


def compile_shnootalk(configmap_dir: str, work_dir: str) -> Tuple[Result, Optional[str]]:
    # Copy files from config map to scratch volume
    copy_program_files_and_cwd(configmap_dir, work_dir)

    # Run the program and get output
    return run_program('main.shtk', get_string_from_file('input'))
