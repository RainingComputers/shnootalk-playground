<script context="module" lang="ts">
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

    export let output: string 
    export let status: string
    export let loading: boolean
    export let ok: boolean
    export let error: boolean
</script>

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
