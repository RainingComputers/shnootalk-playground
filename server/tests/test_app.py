from typing import Any

import pytest
from fastapi.testclient import TestClient

from shnootalk_playground_server.app import app


def test_compile() -> None:
    client = TestClient(app)
    response = client.post(
        "/shnootalk-playground/api/v2/compile",
        json={"main.shtk": 'fn main() -> int { println("Hello world") return 0 }'}
    )

    assert response.json() == {"result": "SUCCESS", "output": "Hello world\n"}


test_invalid_programs = [
    {"file1.shtk": "c"*32768, "file2.shtk": "d"*32768},
    {"folder/file.shtk": "hello", "file.shtk.wrongext": "world"},
    {"file.shtk": "hello", "file.shtk.wrongext": "world"},
]


@pytest.mark.parametrize("test_programs", test_invalid_programs)
def test_dispatch_invalid_schema(test_programs: Any) -> None:
    client = TestClient(app)
    response = client.post("/shnootalk-playground/api/v2/compile", json=test_programs)

    assert response.status_code == 400
    assert response.json() == {
        "detail": "Program too big or file names are invalid"
    }
