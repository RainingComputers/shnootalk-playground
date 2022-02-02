from fastapi import FastAPI
from fastapi.testclient import TestClient

from shnootalk_playground_server.app import app


def test_compile() -> None:
    client = TestClient(app)
    response = client.post(
        "/api/v2/compile",
        json={"main.shtk": 'fn main() -> int { println("Hello world") return 0 }'}
    )

    assert response.json() == {"result": "SUCCESS", "output": "Hello world\n"}
