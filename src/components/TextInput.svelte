<script lang="ts">
    import { tick } from "svelte"

    export let label: string
    export let onEnterCallback: (value: string) => void

    let inputEl: HTMLInputElement

    function onKeyDown(event: any) {
        if (event.key !== "Enter" || event.target.value.length === 0) return
        onEnterCallback(event.target.value)
        event.target.value = ""
    }

    export async function focus() {
        await tick()
        inputEl.focus()
    }

    export function clear() {
        inputEl.value = ""
    }
</script>

<span class="foreground-cc font-small pad-vert-small">{label}</span>
<span class="pad-bottom-small">
    <input
        class="background-1e box-width-full foreground-cc"
        type="text"
        bind:this={inputEl}
        on:keydown={onKeyDown}
    />
</span>
