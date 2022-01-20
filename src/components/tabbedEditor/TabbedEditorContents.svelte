<script lang="ts">
    import Tabs from "../tabs/Tabs.svelte"
    import EditorTabContent from "./EditorTabContent.svelte"
    import type TabbedEditorContext from "./tabbedEditorContext"

    export let fontSize: number = 17
    export let ctx: TabbedEditorContext

    const tabsList = ctx.tabsList
</script>

<Tabs ctx={ctx.tabsContext}>
    {#each $tabsList as tabName}
        <EditorTabContent {tabName} {fontSize} />
    {/each}
</Tabs>
