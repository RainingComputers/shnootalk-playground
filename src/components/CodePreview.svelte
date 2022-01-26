<script context="module" lang="ts">
    const codePreviewClass = [
        "box",
        "box-child-grow",
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
    <code class="box box-child-grow foreground-cc">
        {output}
    </code>
</pre>
