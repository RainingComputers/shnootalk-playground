function ensureStatusOK(response: Response) {
    if (response.status !== 200)
        throw { error: "response not OK", context: response }
}

export async function makeRequest(url: string, method: string, body: any = undefined) {
    let requestOptions: any = { method }

    if (body)
        requestOptions = {
            method,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
        }

    const response = await fetch(url, requestOptions)
    ensureStatusOK(response)
    return response.json()
}
