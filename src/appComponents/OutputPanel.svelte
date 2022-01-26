<script context="module" lang="ts">
    const textAreaClass = [
        "box-width-full",
        "box-height-full",
        "background-2d",
        "foreground-cc",
        "placeholder-foreground-f80",
        "pad-hor",
    ].join(" ")
</script>

<script lang="ts">
    import CodePreview from "../components/CodePreview.svelte"
    import ErrorStatusBadge from "../components/ErrorStatusBadge.svelte"
    import IconAndLabel from "../components/IconAndLabel.svelte"
    import Loading from "../components/Loading.svelte"

    export let loading: boolean = false
    export let error: boolean = false
    export let ok: boolean = false
    export let output: string = ""
    export let status: string = ""
</script>

<div class="box box-width-35 background-2d box-height-full">
    <IconAndLabel icon="icons/terminal.svg" label="OUTPUT">
        <ErrorStatusBadge {error} {ok} />
    </IconAndLabel>

    {#if loading}
        <div class="box box-child-grow box-items-center box-width-full">
            <Loading />
            <span class="pad-vert foreground-f80 font-small">{status}</span>
        </div>
    {:else}
        <CodePreview {output} />
    {/if}

    <div class="box box-width-full border-top-37 box-height-quarter">
        <IconAndLabel icon="icons/terminal.svg" label="INPUT" />
        <textarea class={textAreaClass} placeholder="Enter input here" />
    </div>
</div>
