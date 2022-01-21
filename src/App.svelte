<script lang="ts">
    import Toolbar from "./components/Toolbar.svelte"
    import RunButton from "./components/RunButton.svelte"
    import PlaygroundLogo from "./appComponents/PlaygroundLogo.svelte"
    import TabsContext from "./components/tabs/tabsContext"
    import TabbedEditorButtons from "./components/tabbedEditor/TabbedEditorButtons.svelte"
    import TabbedEditorContents from "./components/tabbedEditor/TabbedEditorContents.svelte"
    import Expand from "./components/Expand.svelte"
    import Modal from "./components/Modal.svelte"
    import TextInput from "./components/TextInput.svelte"

    const tabbedEditorContext = new TabsContext(["main.shtk", "two.shtk"])
    let newTabModal: Modal
    let tabbedEditorButtons: TabbedEditorButtons
    let tabbedEditrorContents: TabbedEditorContents
    let newTabTextInput: TextInput

    function openNewTabModal() {
        newTabModal.openModal()
        newTabTextInput.focus()
    }

    function closeNewTabModalAndCreateTab(value: string) {
        newTabModal.closeModal()
        tabbedEditorButtons.addTab(value)
        tabbedEditrorContents.focus()
    }

    function onKeyDown(event: KeyboardEvent) {
        if (event.key !== "Escape") return
        newTabModal.closeModal()
        newTabTextInput.clear()
        tabbedEditrorContents.focus()
        event.preventDefault()
    }
</script>

<svelte:window on:keydown={onKeyDown} />

<main class="box-root">
    <Modal
        width={25}
        bind:this={newTabModal}
        onClose={() => {
            tabbedEditrorContents.focus()
        }}
    >
        <TextInput
            label="Enter name"
            bind:this={newTabTextInput}
            onEnterCallback={closeNewTabModalAndCreateTab}
        />
    </Modal>

    <Toolbar height={46}>
        <TabbedEditorButtons
            ctx={tabbedEditorContext}
            expandHeight
            bind:this={tabbedEditorButtons}
            on:newTab={openNewTabModal}
        />
        <Expand />
        <PlaygroundLogo />
        <RunButton expandHeight onClick={() => console.log("Run")} />
    </Toolbar>
    <TabbedEditorContents
        ctx={tabbedEditorContext}
        fontSize={17}
        bind:this={tabbedEditrorContents}
    />
</main>
