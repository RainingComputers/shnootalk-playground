import TabsContext from "../tabs/tabsContext"

class TabbedEditorContext {
    tabsList: string[]
    tabsContext: TabsContext

    constructor(initialTabs: string[]) {
        this.tabsList = initialTabs
        this.tabsContext = new TabsContext()
    }
}

export default TabbedEditorContext
