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
    import About from "./appComponents/About.svelte"

    const tabbedEditorContext = new TabsContext([
        "main.shtk",
        "one",
        "two",
        "three",
        "very long very long tab",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "another very long tab",
        "nine",
        "ten",
    ])
    let newTabModal: Modal
    let aboutModal: Modal
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
        if (event.key === "Escape") {
            newTabModal.closeModal()
            aboutModal.closeModal()
            newTabTextInput.clear()
            tabbedEditrorContents.focus()
            event.preventDefault()
        }

        if (event.ctrlKey) {
            openNewTabModal()
        }
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

    <Modal
        width={25}
        bind:this={aboutModal}
        onClose={() => {
            tabbedEditrorContents.focus()
        }}
    >
        <About />
    </Modal>

    <Toolbar height={46}>
        <TabbedEditorButtons
            ctx={tabbedEditorContext}
            expandHeight
            bind:this={tabbedEditorButtons}
            on:newTab={openNewTabModal}
        />
        <Expand />
        <PlaygroundLogo onClick={() => aboutModal.openModal()} />
        <RunButton expandHeight onClick={() => console.log("Run")} />
    </Toolbar>

    <TabbedEditorContents
        ctx={tabbedEditorContext}
        fontSize={17}
        bind:this={tabbedEditrorContents}
    />
</main>
