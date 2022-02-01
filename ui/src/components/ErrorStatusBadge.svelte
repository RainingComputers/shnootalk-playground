<script lang="ts">
    export let error: boolean = false
    export let ok: boolean = false
</script>

{#if ok}
    <span class="pad-hor pad-vert foreground-green font-small text-bold">
        OK
    </span>
{/if}

{#if error}
    <span class="pad-hor pad-vert foreground-red font-small text-bold">
        ERROR
    </span>
{/if}

<style>
    .foreground-green {
        color: green;
    }

    .foreground-red {
        color: red;
    }
</style>
