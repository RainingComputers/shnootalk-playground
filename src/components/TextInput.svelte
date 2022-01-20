<script lang="ts">
    import { tick } from "svelte"

    export let label: string
    export let onChangeCallback: (value: string) => void

    let inputEl: HTMLElement

    function onChange(event: any) {
        onChangeCallback(event.target.value)
        event.target.value = ""
    }

    export async function focus() {
        await tick()
        inputEl.focus()
    }
</script>

<span class="foreground-cc font-small pad-vert-small">{label}</span>
<span class="pad-bottom-small">
    <input
        class="background-1e box-width-full foreground-cc"
        type="text"
        bind:this={inputEl}
        on:change={onChange}
    />
</span>
