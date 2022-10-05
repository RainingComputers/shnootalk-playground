import { makeRequest } from "./request"

const SERVER_URL = "https://shnootalk.cc/shnootalk-playground/api/v2/compile"

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
    output: "Something went wrong, please try again later",
    result: CompileResult.COMPILE_FAILED,
}

const TIMED_OUT: CompileResponse = {
    output: "Execution has timed out or the server is overloaded",
    result: CompileResult.EXEC_TIMEDOUT,
}

const INVALID_FILE_NAMES: CompileResponse = {
    output: "File names should end with the extension '.shtk'",
    result: CompileResult.COMPILE_FAILED,
}

export function validateFileNames(programs: { [key: string]: string }) {
    for (const name in programs) {
        if (name == "input") continue
        if (!name.match(/\w+.shtk/)) return false
    }

    return true
}

export async function makeCompileRequest(programs: {
    [key: string]: string
}): Promise<CompileResponse> {
    try {
        if (!validateFileNames(programs)) return INVALID_FILE_NAMES

        const response = await makeRequest(SERVER_URL, "post", programs)

        if (
            response.result === CompileResult.EXEC_TIMEDOUT ||
            response.result === CompileResult.CLANG_LINK_TIMEDOUT
        )
            return TIMED_OUT

        return response
    } catch {
        return SOMETHING_WENT_WRONG
    }
}
