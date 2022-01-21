<script lang="ts">
    import Tabs from "../tabs/Tabs.svelte"
    import Editor from "../Editor.svelte"
    import TabContent from "../tabs/TabContent.svelte"
    import type TabsContext from "../tabs/tabsContext"

    export let fontSize: number = 17
    export let ctx: TabsContext

    const tabsList = ctx.tabsList
    const editors: { [key: string]: Editor } = {}
</script>

<Tabs {ctx}>
    {#each $tabsList as tabName}
        <TabContent {tabName} on:appear={() => editors[tabName].focus()}>
            <Editor {fontSize} editorId={tabName} bind:this={editors[tabName]} />
        </TabContent>
    {/each}
</Tabs>
