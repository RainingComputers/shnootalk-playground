<script lang="ts">
    export let icon: string
    export let iconWidth: number = 16
    export let label: string
</script>

<div class="box box-arrange-hor">
    <img src={icon} class="pad-left" width="{iconWidth}px" alt="" />
    <span class="pad-hor pad-vert box-width-full foreground-cc font-small">
        {label}
    </span>
</div>
