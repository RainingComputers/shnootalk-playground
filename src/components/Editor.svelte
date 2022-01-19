<script lang="ts">
    import { onDestroy, onMount } from "svelte"
    import ace from "../../public/ace"

    export let fontSize: number
    export let editorId: string

    let editor: any = undefined

    onMount(() => {
        ace.config.set("basePath", "/")

        editor = ace.edit(editorId)
        editor.setTheme("ace/theme/vscode")
        editor.session.setMode("ace/mode/shnootalk")
        editor.setFontSize(fontSize)
        editor.setShowPrintMargin(false)
        editor.setHighlightActiveLine(false)
    })

    onDestroy(() => {
        if (editor) editor.destroy()
    })

    export function focus() {
        editor.focus()
    }
</script>

<div class="box-height-full box-width-full" id={editorId} />
