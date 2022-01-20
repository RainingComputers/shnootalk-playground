import TabsContext from "../tabs/tabsContext"
import { Writable, writable } from "svelte/store"

class TabbedEditorContext {
    tabsList: Writable<string[]>
    tabsContext: TabsContext

    constructor(initialTabs: string[]) {
        this.tabsList = writable(initialTabs)
        this.tabsContext = new TabsContext()
    }
}

export default TabbedEditorContext
