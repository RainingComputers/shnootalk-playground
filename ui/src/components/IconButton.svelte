<script context="module" lang="ts">
    const iconClass = [
        "box",
        "box-items-center",
        "box-rounded",
        "hover-background",
        "pad-vert-small",
        "pad-hor-small",
        "foreground-f80",
    ].join(" ")
</script>

<script lang="ts">
    export let onClick: any = undefined
    export let iconWidth: number = 15
</script>

<button
    class="box-button background-25 box-items-center box-height-full"
    on:click={onClick}
>
    <span class={iconClass} style="width: {iconWidth}px;">
        <slot />
    </span>
</button>
