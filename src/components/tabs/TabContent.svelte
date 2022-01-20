<script lang="ts">
    import { afterUpdate, getContext, createEventDispatcher } from "svelte"
    import { TABS } from "./Tabs.svelte"
    import type TabsContext from "./tabsContext"

    const dispatch = createEventDispatcher()

    export let tabName: string
    export let expand: boolean = true

    const ctx: TabsContext = getContext(TABS)
    const currentTab = ctx.currentTab

    afterUpdate(() => {
        if ($currentTab === tabName) dispatch("appear")
    })
</script>

<div
    class:box-display-none={$currentTab !== tabName}
    class:box-height-full={expand}
    class:box-width-full={expand}
>
    <slot />
</div>
