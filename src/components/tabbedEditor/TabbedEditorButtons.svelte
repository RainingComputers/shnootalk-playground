<script lang="ts">
    import { createEventDispatcher } from "svelte"
    import IconButton from "../IconButton.svelte"
    import TabButton from "../tabs/TabButton.svelte"
    import Tabs from "../tabs/Tabs.svelte"
    import type TabbedEditorContext from "./tabbedEditorContext"

    export let expandHeight: boolean
    export let ctx: TabbedEditorContext

    const dispatch = createEventDispatcher()
    const tabsList = ctx.tabsList

    function closeTab(tabName: string) {
        ctx.tabsList.update((tabsList) => tabsList.filter((elem) => elem !== tabName))
    }

    export function addTab(tabName: string) {
        ctx.tabsList.update((tabsList) => [...tabsList, tabName])
    }
</script>

<Tabs ctx={ctx.tabsContext}>
    <TabButton tabName={$tabsList[0]} {expandHeight} tabIcon="icons/code.svg" />
    {#each $tabsList.slice(1) as tabName}
        <TabButton
            {tabName}
            {expandHeight}
            tabIcon="icons/code.svg"
            onClose={() => closeTab(tabName)}
        />
    {/each}
    <IconButton icon="icons/plus.svg" onClick={() => dispatch("newTab")} />
</Tabs>
