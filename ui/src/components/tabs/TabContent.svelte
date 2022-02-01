<script lang="ts">
    import { afterUpdate, getContext, createEventDispatcher } from "svelte"
    import { TABS } from "./Tabs.svelte"
    import type TabsContext from "./tabsContext"

    export let tabName: string

    const dispatch = createEventDispatcher()
    const ctx: TabsContext = getContext(TABS)
    const currentTab = ctx.currentTab

    afterUpdate(() => {
        if ($currentTab === tabName) dispatch("appear")
    })
</script>

<div class:box-display-none={$currentTab !== tabName} class="box-child-grow">
    <slot />
</div>
