<script lang="ts">
    import Tabs from "../tabs/Tabs.svelte"
    import Editor from "../Editor.svelte"
    import TabContent from "../tabs/TabContent.svelte"
    import type TabsContext from "../tabs/tabsContext"

    export let fontSize: number = 17
    export let ctx: TabsContext

    const tabsList = ctx.tabsList
    const currentTab = ctx.currentTab
    const editors: { [key: string]: Editor } = {}

    export function focus() {
        if (editors[$currentTab]) editors[$currentTab].focus()
    }
</script>

<Tabs {ctx}>
    {#each $tabsList as tabName}
        <TabContent {tabName} on:appear={focus}>
            <Editor {fontSize} editorId={tabName} bind:this={editors[tabName]} />
        </TabContent>
    {/each}
</Tabs>
