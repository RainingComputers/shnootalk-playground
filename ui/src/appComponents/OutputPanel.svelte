<script lang="ts">
    import CodePreview from "../components/CodePreview.svelte"
    import ErrorStatusBadge from "../components/ErrorStatusBadge.svelte"
    import IconAndLabel from "../components/IconAndLabel.svelte"
    import Loading from "../components/Loading.svelte"

    export let output: string = ""
    export let loading: boolean = false
    export let ok: boolean = false
    export let error: boolean = false
</script>

<IconAndLabel icon="icons/terminal.svg" label="OUTPUT">
    <ErrorStatusBadge {error} {ok} />
</IconAndLabel>

{#if loading}
    <div class="box box-child-grow box-items-center box-width-full">
        <Loading />
        <span class="pad-vert foreground-f80 font-small"> Compiling </span>
    </div>
{:else}
    <CodePreview {output} />
{/if}
