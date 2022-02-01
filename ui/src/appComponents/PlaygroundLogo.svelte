<script context="module" lang="ts">
    const labelClass = [
        "box",
        "box-arrange-hor",
        "box-items-center",
        "pad-hor",
        "pad-vert",
        "background-25",
        "foreground-cc",
        "cursor-pointer",
        "hover-background",
    ].join(" ")
</script>

<script lang="ts">
    export let onClick: any = undefined
</script>

<div class={labelClass} on:click={onClick}>
    <img src="icons/logo.svg" class="" width="50px" alt="" />
    <span class="box">
        <span class="pad-left-small text-no-wrap"> ShnooTalk Playground </span>
    </span>
</div>
