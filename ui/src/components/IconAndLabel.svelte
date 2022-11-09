<script lang="ts">
    export let iconWidth: number = 16
    export let label: string
</script>

<div class="box box-arrange-hor box-items-center">
    <span
        class="box box-items-center pad-left foreground-f80"
        style="width: {iconWidth}px;"
    >
        <slot />
    </span>
    <span class=" pad-hor pad-vert foreground-cc font-small">
        {label}
    </span>
</div>
