<script context="module" lang="ts">
    const toolbarClass = [
        "box",
        "box-arrange-hor",
        "box-width-full",
        "background-25",
        "box-items-center",
    ].join(" ")
</script>

<script lang="ts">
    export let height: number
</script>

<div class={toolbarClass} style="height: {height}px;">
    <slot />
</div>
