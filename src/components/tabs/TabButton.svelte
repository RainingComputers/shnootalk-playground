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
    ].join(" ")
</script>

<script lang="ts">
    import { getContext } from "svelte"
    import { onMount, onDestroy } from "svelte"
    import { TABS } from "./Tabs.svelte"
    import type TabsContext from "./tabsContext"

    export let tabIcon: string | undefined = undefined
    export let tabIconWidth: number = 15
    export let expandHeight: boolean = false
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
    class:box-height-full={expandHeight}
    class:active={$currentTab == tabName}
    style="min-width: {minWidth}px;"
    on:click|preventDefault={() => {
        ctx.openTab(tabName)
    }}
>
    {#if tabIcon}
        <img
            src={tabIcon}
            class="box-child-float-right pad-right-small"
            width="{tabIconWidth}px"
            alt=""
        />
    {/if}

    <span>{tabName}</span>

    {#if onClose}
        <span class="box-child-float-right pad-left" />
        <img
            src="icons/x.svg"
            class="box-rounded hover-background-darken"
            width="{tabIconWidth}px"
            alt=""
            on:click={() => {
                onClose(tabName)
            }}
        />
    {/if}
</button>
