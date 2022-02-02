<script lang="ts">
    import { CompileResult, makeCompileRequest } from "../api/cloudCompile"

    import CodePreview from "../components/CodePreview.svelte"
    import ErrorStatusBadge from "../components/ErrorStatusBadge.svelte"
    import IconAndLabel from "../components/IconAndLabel.svelte"
    import Loading from "../components/Loading.svelte"

    let output: string = ""
    let loading: boolean = false
    let ok: boolean = false
    let error: boolean = false

    export async function compileProgram(programs: { [key: string]: string }) {
        loading = true

        const response = await makeCompileRequest(programs)
        const result = response.result
        output = response.output
        ok = result === CompileResult.SUCCESS
        error = !ok

        loading = false
    }

    export function isLoading() {
        return loading
    }
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
