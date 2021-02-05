class Model {
    constructor() {
        this.tabs = JSON.parse(localStorage.getItem('tabs'))
    }

    bindTabListChanged(callback) {
        this.onTabListChanged = callback
    }

    _commit(tabs) {
        this.onTodoListChanged(tabs)
        localStorage.setItem('tabs', JSON.stringify(tabs))
    }

    addTab(tabName) {
        const todo = {
          id: this.tabs.length > 0 ? this.tabs[this.tabs.length - 1].id + 1 : 1,
          tabname: tabName,
          complete: false,
        }
    
        this.tabs.push(tab)
    
        this._commit(this.tabs)
    }

    editTab(id, updatedTabName) {
        this.tabs = this.tabs.map(tab =>
          tab.id === id ? { id: tab.id, tabname: updatedTabName, complete: tab.complete } : tab
        )
    
        this._commit(this.tabs)
    }

    deleteTodo(id) {
        this.tabs = this.tabs.filter(tab => tab.id !== id)
    
        this._commit(this.tabs)
    }

    toggleTodo(id) {
        this.tabs = this.tabs.map(tab =>
          tab.id === id ? { id: tab.id, tabname: tab.tabName, complete: !tab.complete } : tab
        )
    
        this._commit(this.tabs)
    }
  }
  
  class View {
    constructor() {
        this.app = this.getElement('#root')
        this.tabList = this.createElement('ul', 'tab-list')
        this.tab = this.createElement('button')
        this.tab.textContent = 'Task'
    }
  }
  
  class Controller {
    constructor(model, view) {
      this.model = model
      this.view = view
    }
  }
  
  const app = new Controller(new Model(), new View())