<script context="module" lang="ts">
    const textAreaClass = [
        "box-height-full",
        "background-2d",
        "foreground-cc",
        "placeholder-foreground-f80",
        "pad-hor",
    ].join(" ")
</script>

<script lang="ts">
    import IconAndLabel from "../components/IconAndLabel.svelte"
    import Terminal from "../components/icons/Terminal.svelte"

    let textArea: HTMLTextAreaElement

    export function getInput() {
        return textArea.value
    }
</script>

<div class="box box-width-full border-top-37 box-height-quarter">
    <IconAndLabel label="INPUT">
        <Terminal />
    </IconAndLabel>
    <textarea
        class={textAreaClass}
        placeholder="Enter input here"
        bind:this={textArea}
    />
</div>
