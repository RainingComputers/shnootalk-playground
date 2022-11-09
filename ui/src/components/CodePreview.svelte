<script context="module" lang="ts">
    const codePreviewClass = [
        "box",
        "box-height-75",
        "pad-hor",
        "scroll-x",
        "scroll-y",
        "scroll-hidden",
    ].join(" ")
</script>

<script lang="ts">
    export let output: string = ""
</script>

<pre class={codePreviewClass}>
    <code class="foreground-cc">
{output}
    </code>
</pre>
