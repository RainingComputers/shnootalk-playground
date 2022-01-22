<script lang="ts">
    import { createEventDispatcher } from "svelte"
    import HorizontalScrollable from "../HorizontalScrollable.svelte"
    import IconButton from "../IconButton.svelte"
    import TabButton from "../tabs/TabButton.svelte"
    import Tabs from "../tabs/Tabs.svelte"
    import type TabsContext from "../tabs/tabsContext"

    export let ctx: TabsContext

    const dispatch = createEventDispatcher()
    const tabsList = ctx.tabsList

    export function addTab(tabName: string) {
        ctx.addTab(tabName)
    }
</script>

<Tabs {ctx}>
    <HorizontalScrollable>
        <div class="box box-arrange-hor box-height-full bax-arrange-gap">
            <TabButton tabName={$tabsList[0]} tabIcon="icons/code.svg" />
            {#each $tabsList.slice(1) as tabName}
                <TabButton
                    {tabName}
                    tabIcon="icons/code.svg"
                    onClose={() => ctx.closeTab(tabName)}
                />
            {/each}
        </div>
    </HorizontalScrollable>

    <IconButton icon="icons/plus.svg" onClick={() => dispatch("newTab")} />
</Tabs>
