export default class Todo {
      constructor(data) {
            this.description = data.description || ''
            this.completed = data.completed || ''
            this._id = data._id || ''
            this.todoremove = data.todoremove || ''
            this.todotoggle = data.todotoggle || ''
      }



      get Template() {
            return `

            <button onclick="app.controllers.todoController.addtodo(${this._id})"> Add </button>
            <button onclick="app.controllers.todoController.add(${this._id})"> Remove </button>
      `
      }
}