<script lang="ts">
    import Toolbar from "./components/Toolbar.svelte"
    import RunButton from "./components/RunButton.svelte"
    import PlaygroundLogo from "./appComponents/PlaygroundLogo.svelte"

    import TabbedEditorContext from "./components/tabbedEditor/tabbedEditorContext"
    import TabbedEditorButtons from "./components/tabbedEditor/TabbedEditorButtons.svelte"
    import TabbedEditorContent from "./components/tabbedEditor/TabbedEditorContents.svelte"
    import Expand from "./components/Expand.svelte"

    const tabbedEditorContext = new TabbedEditorContext(["main.shtk", "two.shtk"])
</script>

<main class="box-root">
    <Toolbar height={46}>
        <TabbedEditorButtons ctx={tabbedEditorContext} expandHeight />
        <Expand />
        <PlaygroundLogo />
        <RunButton expandHeight onClick={() => console.log("Run")} />
    </Toolbar>
    <TabbedEditorContent ctx={tabbedEditorContext} fontSize={17} />
</main>
