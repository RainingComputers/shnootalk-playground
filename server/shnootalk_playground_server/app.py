from typing import Dict, Optional
import os
import secrets

from fastapi import FastAPI

from shnootalk_playground_server.compiler import compile_shnootalk


WORK_DIR_BASE = os.getenv("WORK_DIR_BASE")
TIMEOUT = int(os.getenv("TIMEOUT", "5"))


app = FastAPI()


def gen_work_dir(programs: Dict[str, str]) -> str:
    for file_name, content in programs.items():
        pass

    return secrets.token_hex()


@app.post("/api/v2/compile")
def compile(programs: Dict[str, str]) -> Dict[str, Optional[str]]:
    result, output = compile_shnootalk(gen_work_dir(programs), TIMEOUT)

    return {"result": result, "output": output}
