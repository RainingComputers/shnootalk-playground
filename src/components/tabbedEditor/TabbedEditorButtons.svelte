<script lang="ts">
    import IconButton from "../IconButton.svelte"

    import TabButton from "../tabs/TabButton.svelte"
    import Tabs from "../tabs/Tabs.svelte"
    import type TabbedEditorContext from "./tabbedEditorContext"

    export let expandHeight: boolean

    export let ctx: TabbedEditorContext

    function closeTab(tabName: string) {
        ctx.tabsList = ctx.tabsList.filter((elem) => elem !== tabName)
    }
</script>

<Tabs ctx={ctx.tabsContext}>
    <TabButton tabName={ctx.tabsList[0]} {expandHeight} tabIcon="icons/code.svg" />
    {#each ctx.tabsList.slice(1) as tabName}
        <TabButton
            {tabName}
            {expandHeight}
            tabIcon="icons/code.svg"
            onClose={() => closeTab(tabName)}
        />
    {/each}
    <IconButton icon="icons/plus.svg" />
</Tabs>
