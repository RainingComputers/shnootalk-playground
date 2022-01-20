<script lang="ts">
    export let width: number

    let showModal = false

    export function openModal() {
        showModal = true
    }

    export function closeModal() {
        showModal = false
    }
</script>

<div
    class="box box-modal-background box-arrange-hor"
    class:box-display-none={!showModal}
    on:click={closeModal}
>
    <div
        class="box box-modal-window background-25 pad-hor"
        style="width: {width}%;"
        on:click|stopPropagation
    >
        <slot />
    </div>
</div>
