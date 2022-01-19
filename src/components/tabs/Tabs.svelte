<script context="module" lang="ts">
    export const TABS = {}
</script>

<script lang="ts">
    import { setContext } from "svelte"
    import type TabsContext from "./tabsContext"

    export let ctx: TabsContext
    setContext(TABS, ctx)
</script>

<slot />
