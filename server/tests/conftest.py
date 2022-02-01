from typing import Iterator

import os
import shutil
import pytest


@pytest.fixture
def work_dir() -> Iterator[str]:
    dir_name = 'work_dir'

    shutil.rmtree(dir_name, ignore_errors=True)

    cwd = os.getcwd()
    os.mkdir(dir_name)

    yield dir_name

    os.chdir(cwd)
    shutil.rmtree(dir_name)


os.environ['TIMEOUT'] = '1'
