<script lang="ts">
    import Tabs from "../tabs/Tabs.svelte"
    import EditorTabContent from "./EditorTabContent.svelte"
    import type TabsContext from "../tabs/tabsContext"

    export let fontSize: number = 17
    export let ctx: TabsContext

    const tabsList = ctx.tabsList
</script>

<Tabs {ctx}>
    {#each $tabsList as tabName}
        <EditorTabContent {tabName} {fontSize} />
    {/each}
</Tabs>
