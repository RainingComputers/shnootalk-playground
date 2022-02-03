import { makeRequest } from "./request"

const SERVER_URL = "http://127.0.0.1:8000/shnootalk_playground/api/v2/compile"
const MESSAGE_500 = "Something went wrong, please try again later"

export enum CompileResult {
    EXEC_TIMEDOUT = "EXEC_TIMEDOUT",
    CLANG_LINK_TIMEDOUT = "CLANG_LINK_TIMEDOUT",
    CLANG_LINK_FAILED = "CLANG_LINK_FAILED",
    COMPILE_FAILED = "COMPILE_FAILED",
    COMPILE_TIMEDOUT = "COMPILE_TIMEDOUT",
    SUCCESS = "SUCCESS",
}

interface CompileResponse {
    output: string
    result: CompileResult
}

const SOMETHING_WENT_WRONG: CompileResponse = {
    output: MESSAGE_500,
    result: CompileResult.COMPILE_FAILED,
}

const TIMED_OUT: CompileResponse = {
    output: "Execution has timed out",
    result: CompileResult.EXEC_TIMEDOUT,
}

export async function makeCompileRequest(programs: {
    [key: string]: string
}): Promise<CompileResponse> {
    try {
        const response = await makeRequest(SERVER_URL, "post", programs)

        if (response.result === CompileResult.EXEC_TIMEDOUT) return TIMED_OUT

        return response
    } catch {
        return SOMETHING_WENT_WRONG
    }
}
