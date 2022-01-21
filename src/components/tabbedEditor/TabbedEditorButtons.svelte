<script lang="ts">
    import { createEventDispatcher } from "svelte"
    import HorizontalScrollable from "../HorizontalScrollable.svelte"
    import IconButton from "../IconButton.svelte"
    import TabButton from "../tabs/TabButton.svelte"
    import Tabs from "../tabs/Tabs.svelte"
    import type TabsContext from "../tabs/tabsContext"

    export let expandHeight: boolean
    export let ctx: TabsContext

    const dispatch = createEventDispatcher()
    const tabsList = ctx.tabsList

    export function addTab(tabName: string) {
        ctx.addTab(tabName)
    }
</script>

<Tabs {ctx}>
    <HorizontalScrollable {expandHeight}>
        <TabButton tabName={$tabsList[0]} {expandHeight} tabIcon="icons/code.svg" />
        {#each $tabsList.slice(1) as tabName}
            <TabButton
                {tabName}
                {expandHeight}
                tabIcon="icons/code.svg"
                onClose={() => ctx.closeTab(tabName)}
            />
        {/each}
    </HorizontalScrollable>

    <IconButton icon="icons/plus.svg" onClick={() => dispatch("newTab")} />
</Tabs>
