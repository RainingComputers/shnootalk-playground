<script context="module" lang="ts">
    const tabButtonClass = [
        "box",
        "box-arrange-hor",
        "box-items-center",
        "box-button",
        "pad-hor",
        "pad-vert",
        "active-background-1e",
        "hover-background-33",
        "background-2d",
        "foreground-f80",
        "active-foreground-cc",
        "box-height-full",
    ].join(" ")

    const tabIconClass = [
        "box",
        "box-items-center",
        "box-child-float-right",
        "pad-right-small",
        "foreground-f80",
        "active-foreground-cc",
    ].join(" ")

    const closeIconClass = [
        "box",
        "box-items-center",
        "box-rounded",
        "foreground-f80",
        "hover-background",
    ].join(" ")
</script>

<script lang="ts">
    import { getContext } from "svelte"
    import { onMount, onDestroy } from "svelte"
    import { TABS } from "./Tabs.svelte"
    import type TabsContext from "./tabsContext"
    import Cross from "../icons/Cross.svelte"

    export let tabIconWidth: number = 15
    export let minWidth: number = 120
    export let onClose: (tabName: string) => void | undefined = undefined
    export let tabName: string

    const ctx: TabsContext = getContext(TABS)
    const currentTab = ctx.currentTab

    onMount(() => {
        ctx.openTab(tabName)
    })

    onDestroy(() => {
        ctx.closeTab(tabName)
    })
</script>

<button
    class={tabButtonClass}
    class:active={$currentTab == tabName}
    style="min-width: {minWidth}px;"
    on:click|preventDefault={() => {
        ctx.openTab(tabName)
    }}
>
    <span
        class={tabIconClass}
        class:active={$currentTab == tabName}
        style="width: {tabIconWidth}px;"
    >
        <slot />
    </span>

    <span class="text-overflow-ellipses text-no-wrap">{tabName}</span>

    {#if onClose}
        <span class="box-child-float-right pad-left" />
        <span
            class={closeIconClass}
            style="width: {tabIconWidth}px;"
            on:click={() => {
                onClose(tabName)
            }}
        >
            <Cross />
        </span>
    {/if}
</button>
