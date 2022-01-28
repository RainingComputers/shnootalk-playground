<script lang="ts">
    import {
        CompileResult,
        dispatchProgram,
        loadingStatus,
        successStatus,
    } from "./api/cloudCompile"
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
    import OutputPanel from "./appComponents/OutputPanel.svelte"
    import InputPanel from "./appComponents/InputPanel.svelte"

    const tabbedEditorContext = new TabsContext(["main.shtk"])
    let status = ""
    let output = ""
    let loading: boolean = false
    let ok: boolean = false
    let error: boolean = false

    let newTabModal: Modal
    let aboutModal: Modal
    let tabbedEditorButtons: TabbedEditorButtons
    let tabbedEditrorContents: TabbedEditorContents
    let newTabTextInput: TextInput
    let inputPanel: InputPanel

    function openNewTabModal() {
        newTabModal.openModal()
        newTabTextInput.focus()
    }

    function closeNewTabModalAndCreateTab(value: string) {
        newTabModal.closeModal()
        tabbedEditorButtons.addTab(value)
    }

    function onKeyDown(event: KeyboardEvent) {
        if (event.key !== "Escape") return

        newTabModal.closeModal()
        aboutModal.closeModal()
        newTabTextInput.clear()
        tabbedEditrorContents.focus()
        event.preventDefault()
    }

    function setStatusAndOutput(result: CompileResult) {
        status = result.status.toString()
        output = result.output

        loading = loadingStatus.includes(status)
        ok = successStatus.includes(status) && !loading
        error = !ok && !loading
    }

    function compileAndStartStatusPoll() {
        loading = true

        const programs = {
            ...tabbedEditrorContents.getContents(),
            input: inputPanel.getInput(),
        }

        dispatchProgram(programs, setStatusAndOutput)
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
        width={30}
        bind:this={aboutModal}
        onClose={() => {
            tabbedEditrorContents.focus()
        }}
    >
        <About />
    </Modal>

    <Toolbar>
        <TabbedEditorButtons
            ctx={tabbedEditorContext}
            bind:this={tabbedEditorButtons}
            on:newTab={openNewTabModal}
        />
        <Expand />
        <PlaygroundLogo onClick={() => aboutModal.openModal()} />
        <RunButton onClick={compileAndStartStatusPoll} disabled={loading} />
    </Toolbar>

    <div class="box box-arrange-hor box-width-full box-height-full">
        <TabbedEditorContents
            ctx={tabbedEditorContext}
            fontSize={17}
            bind:this={tabbedEditrorContents}
        />

        <div class="box background-2d box-width-35">
            <OutputPanel {status} {output} {loading} {ok} {error} />
            <InputPanel bind:this={inputPanel} />
        </div>
    </div>
</main>
