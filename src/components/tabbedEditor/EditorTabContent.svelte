<script lang="ts">
import Editor from "../Editor.svelte";

    import TabContent from "../tabs/TabContent.svelte";

    export let tabName: string
    export let fontSize: number

    let editorComponent: any
</script>

<TabContent {tabName} on:appear={() => editorComponent.focus()}>
    <Editor {fontSize} editorId={tabName} bind:this={editorComponent} />
</TabContent>
