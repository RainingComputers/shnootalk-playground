import { Writable, writable } from "svelte/store"

class TabsContext {
    tabHistory: string[] = []
    currentTab = writable<string | undefined>(undefined)
    tabsList: Writable<string[]>

    constructor(initialTabs: string[]) {
        this.tabsList = writable(initialTabs)
    }

    openTab(tabName: string) {
        this.currentTab.set(tabName)
        this.tabHistory.push(tabName)
    }

    closeTab(tabName: string) {
        const tabFilter = (elem: string) => elem != tabName
        this.tabHistory = this.tabHistory.filter(tabFilter)
        this.openTab(this.tabHistory.pop())
        this.tabsList.update((tabsList) => tabsList.filter(tabFilter))
    }

    addTab(tabName: string) {
        this.tabsList.update((tabsList) => [...new Set([...tabsList, tabName])])
        this.openTab(tabName)
    }
}

export default TabsContext
