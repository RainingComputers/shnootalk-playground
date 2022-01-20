<script lang="ts">
    import Editor from "../Editor.svelte"
    import TabContent from "../tabs/TabContent.svelte"

    export let tabName: string
    export let fontSize: number

    let editor: Editor
</script>

<TabContent {tabName} on:appear={() => editor.focus()}>
    <Editor {fontSize} editorId={tabName} bind:this={editor} />
</TabContent>
