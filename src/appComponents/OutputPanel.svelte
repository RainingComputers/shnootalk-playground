<script context="module" lang="ts">
    import { loadingStatus, successStatus } from "../api/cloudCompile"

    const textAreaClass = [
        "box-height-full",
        "background-2d",
        "foreground-cc",
        "placeholder-foreground-f80",
        "pad-hor",
    ].join(" ")

    const displayStringMap: { [key: string]: string } = {
        SENDING_REQUEST: "Sending request",
        SCHEDULED: "Scheduled",
        EXEC_TIMEDOUT: "Execution timed out",
        CLANG_LINK_TIMEDOUT: "Link timed out",
        CLANG_LINK_FAILED: "Link error",
        COMPILE_FAILED: "Compile error",
        COMPILE_TIMEDOUT: "Compile time out",
        COMPILE_STARTED: "Compile started",
    }

    function statusToDisplayString(status: string): string {
        return displayStringMap[status] || "Unknown status"
    }
</script>

<script lang="ts">
    import CodePreview from "../components/CodePreview.svelte"
    import ErrorStatusBadge from "../components/ErrorStatusBadge.svelte"
    import IconAndLabel from "../components/IconAndLabel.svelte"
    import Loading from "../components/Loading.svelte"

    export let output: string = ""
    export let status: string = ""

    let textArea: HTMLTextAreaElement

    const loading = loadingStatus.includes(status)
    const ok = successStatus.includes(status) && !loading
    const error = !ok && !loading && status.length !== 0

    export function isLoading() {
        return loading
    }

    export function getInput() {
        return textArea.value
    }
</script>

<div class="box background-2d box-width-45">
    <IconAndLabel icon="icons/terminal.svg" label="OUTPUT">
        <ErrorStatusBadge {error} {ok} />
    </IconAndLabel>

    {#if loading}
        <div class="box box-child-grow box-items-center box-width-full">
            <Loading />
            <span class="pad-vert foreground-f80 font-small">
                {statusToDisplayString(status)}
            </span>
        </div>
    {:else}
        <CodePreview {output} />
    {/if}

    <div class="box box-width-full border-top-37 box-height-quarter">
        <IconAndLabel icon="icons/terminal.svg" label="INPUT" />
        <textarea
            class={textAreaClass}
            placeholder="Enter input here"
            bind:this={textArea}
        />
    </div>
</div>
