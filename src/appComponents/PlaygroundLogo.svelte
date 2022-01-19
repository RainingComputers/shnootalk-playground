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
        "hover-background-darken",
    ].join(" ")
</script>

<script lang="ts">
    export let onclick: any = undefined
</script>

<div class={labelClass} {onclick}>
    <img src="icons/logo.svg" class="" width="50px" alt="" />
    <span class="box">
        <span class="pad-left-small text-no-wrap font-small">ShnooTalk Playground</span>
    </span>
</div>
