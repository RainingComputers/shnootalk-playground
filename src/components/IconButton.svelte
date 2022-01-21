<script lang="ts">
    export let icon: string
    export let onClick: any = undefined
    export let iconWidth: number = 15
</script>

<button
    class="box-button background-25 box-items-center box-height-full"
    on:click={onClick}
>
    <img
        src={icon}
        class="box-rounded hover-background pad-vert-small pad-hor-small"
        width="{iconWidth}px"
        alt=""
    />
</button>
