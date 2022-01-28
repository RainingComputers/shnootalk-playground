import { makeRequest } from "./request"

const SERVER_URL =
    "https://shnootalk-cloud-compile.loophole.site/shnootalk/compile/api/v1/"
const DISPATCH_ENDPOINT = SERVER_URL + "dispatch"
const POLL_FREQUENCY = 250
const MESSAGE_500 = "Something went wrong, please try again later"

export enum CompileStatus {
    SENDING_REQUEST = "SENDING_REQUEST",
    SCHEDULED = "SCHEDULED",
    EXEC_TIMEDOUT = "EXEC_TIMEDOUT",
    CLANG_LINK_TIMEDOUT = "CLANG_LINK_TIMEDOUT",
    CLANG_LINK_FAILED = "CLANG_LINK_FAILED",
    COMPILE_FAILED = "COMPILE_FAILED",
    COMPILE_TIMEDOUT = "COMPILE_TIMEDOUT",
    COMPILE_STARTED = "COMPILE_STARTED",
    SUCCESS = "SUCCESS",
}

export interface CompileResult {
    output: string
    status: CompileStatus
}

export const loadingStatus: string[] = [
    CompileStatus.SENDING_REQUEST,
    CompileStatus.SCHEDULED,
    CompileStatus.COMPILE_STARTED,
]

export const successStatus: string[] = [CompileStatus.SUCCESS]

const SOMETHING_WENT_WRONG: CompileResult = {
    output: MESSAGE_500,
    status: CompileStatus.COMPILE_FAILED,
}

function getStatusEndPointURL(programId: string) {
    return SERVER_URL + "status/" + programId
}

async function pollCompileServerForStatus(
    programId: string,
    statusCallback: (result: CompileResult) => void,
    stopIntervalCallback: any
) {
    try {
        const result = await makeRequest(getStatusEndPointURL(programId), "GET")
        statusCallback(result)
        if (!loadingStatus.includes(result.status)) stopIntervalCallback()
    } catch {
        statusCallback(SOMETHING_WENT_WRONG)
        stopIntervalCallback()
    }
}

export async function dispatchProgram(
    programs: { [key: string]: string },
    statusCallback: (result: CompileResult) => void
) {
    try {
        statusCallback({ status: CompileStatus.SENDING_REQUEST, output: "" })

        const response = await makeRequest(DISPATCH_ENDPOINT, "POST", programs)
        const programId = response["_id"]

        let intervalId = setInterval(
            pollCompileServerForStatus,
            POLL_FREQUENCY,
            programId,
            statusCallback,
            () => {
                clearInterval(intervalId)
            }
        )
    } catch {
        statusCallback(SOMETHING_WENT_WRONG)
    }
}
