<script lang="ts">
    import Toolbar from "./components/Toolbar.svelte"
    import RunButton from "./components/RunButton.svelte"
    import PlaygroundLogo from "./appComponents/PlaygroundLogo.svelte"

    import TabbedEditorContext from "./components/tabbedEditor/tabbedEditorContext"
    import TabbedEditorButtons from "./components/tabbedEditor/TabbedEditorButtons.svelte"
    import TabbedEditorContent from "./components/tabbedEditor/TabbedEditorContents.svelte"
    import Expand from "./components/Expand.svelte"
    import Modal from "./components/Modal.svelte"
    import TextInput from "./components/TextInput.svelte"

    const tabbedEditorContext = new TabbedEditorContext(["main.shtk", "two.shtk"])
    let newTabModal: Modal
    let tabbedEditorButtons: TabbedEditorButtons
    let newTabTextInput: TextInput

    function openNewTabModal() {
        newTabModal.openModal()
        newTabTextInput.focus()
    }

    function closeNewTabModalAndCreateTab(value: string) {
        newTabModal.closeModal()
        tabbedEditorButtons.addTab(value)
    }
</script>

<main class="box-root">
    <Modal width={25} bind:this={newTabModal}>
        <TextInput
            label="Enter name"
            bind:this={newTabTextInput}
            onChangeCallback={closeNewTabModalAndCreateTab}
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
    <TabbedEditorContent ctx={tabbedEditorContext} fontSize={17} />
</main>
