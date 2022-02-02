import os
from typing import Generator

from contextlib import contextmanager


@contextmanager
def dirctx(path: str) -> Generator[None, None, None]:
    saved_path = os.getcwd()
    os.chdir(path)

    yield None

    os.chdir(saved_path)
