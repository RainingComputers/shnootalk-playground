# pylint: disable=import-outside-toplevel, redefined-outer-name

from typing import Iterator

import os
import shutil
import pytest

from shnootalk_playground_server.compiler import compile_shnootalk, Result


fixtures_dir_list = [
    './tests/fixtures/success',
    './tests/fixtures/compile_fail',
    './tests/fixtures/link_fail',
    './tests/fixtures/input',
    './tests/fixtures/exec_timeout'
]

expected_outputs_list = [
    'Hello world\nfoobar!\n',

    'MODULE main.shtk\n'
    'ERROR in Line 1 Col 4\n'
    '\n'
    'fn main()\n'
    '   ^\n'
    'Invalid return type for main\n'
    '\n'
    'main.shtk:1:3\n',

    "/usr/bin/ld: main.shtk.o: in function `main':\n"
    "main.shtk:(.text+0x2): undefined reference to `doesNotExist'\n"
    "clang: error: linker command failed with exit code 1 (use -v to see invocation)\n",

    'Hello',

    None
]

expected_result_list = [
    Result.SUCCESS,
    Result.COMPILE_FAILED,
    Result.CLANG_LINK_FAILED,
    Result.SUCCESS,
    Result.EXEC_TIMEDOUT
]


@pytest.fixture
def work_dir() -> Iterator[str]:
    dir_name = 'work_dir'

    shutil.rmtree(dir_name, ignore_errors=True)

    cwd = os.getcwd()
    os.mkdir(dir_name)

    yield dir_name

    os.chdir(cwd)
    shutil.rmtree(dir_name)


def copy_program_files(fixture_dir: str, work_dir: str) -> None:
    for file in os.listdir(fixture_dir):
        shutil.copy(
            os.path.join(fixture_dir, file),
            os.path.join(work_dir, file)
        )


@pytest.mark.parametrize("fixture_dir,expected_result,expected_output",
                         zip(fixtures_dir_list, expected_result_list, expected_outputs_list))
def test_main(work_dir: str,
              fixture_dir: str,
              expected_result: str,
              expected_output: str) -> None:
    copy_program_files(fixture_dir, work_dir)

    result, output = compile_shnootalk(work_dir, 1, "Hello")

    assert result == expected_result
    if 'link_fail' not in fixture_dir:
        assert output == expected_output
