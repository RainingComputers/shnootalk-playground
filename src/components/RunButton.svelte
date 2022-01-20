<script context="module" lang="ts">
    const buttonClass = [
        "box",
        "box-button",
        "box-arrange-hor",
        "box-items-center",
        "box-height-full",
        "pad-vert",
        "pad-hor",
        "box-content-center",
    ].join(" ")
</script>

<script lang="ts">
    export let onClick: any
    export let disabled: boolean = false
    export let expandHeight: boolean = false
    export let expendWidth: boolean = false
    export let iconWidth: number = 15
</script>

<button
    class={buttonClass}
    class:box-height-full={expandHeight}
    class:box-width-full={expendWidth}
    on:click={onClick}
    {disabled}
>
    <img src="icons/play.svg" width="{iconWidth}px" alt="" />
    <span class="pad-left-small foreground-white">Run</span>
</button>

<style>
    button {
        background: #059862;
    }

    button[disabled] {
        background: #a08000f9 !important;
    }

    button:hover {
        background: #04aa6d;
    }
</style>
