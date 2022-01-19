import { writable } from "svelte/store"

class TabsContext
{
    tabHistory: string[] = []
    currentTab =  writable<string | undefined>(undefined)

    openTab(tabName: string) {
        this.currentTab.set(tabName)
        this.tabHistory.push(tabName)
    }

    closeTab(tabName: string) {
        this.tabHistory = this.tabHistory.filter((elem) => elem != tabName)
        this.openTab(this.tabHistory.pop())
    }
}

export default TabsContext