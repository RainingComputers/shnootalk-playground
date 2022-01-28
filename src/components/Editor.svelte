<script context="module" lang="ts">
    // @ts-ignore
    window.ace.config.set("basePath", "/")
</script>

<script lang="ts">
    import { onDestroy, onMount } from "svelte"
    export let fontSize: number
    export let editorId: string

    let editor: any = undefined

    onMount(() => {
        // @ts-ignore
        editor = window.ace.edit(editorId)
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
        // set timeout so the editor does not capture key events like the enter key
        // there is no other way to do this
        setTimeout(() => editor.focus(), 1)
    }

    export function getValue(): string {
        return editor.getValue()
    }
</script>

<div class="box-height-full box-width-full" id={editorId} />
