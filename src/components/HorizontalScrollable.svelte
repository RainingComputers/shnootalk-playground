<script lang="ts">
    export let expandHeight: boolean = false
</script>

<div class="box box-arrange-hor scroll-x" class:box-height-full={expandHeight}>
    <slot />
</div>
