export default class Todo {
      constructor(data) {
            this.completed = data.completed
            this.description = data.description
            this._id = data._id
      }



      get Template() {
            return `
<h4>${this.description}</h4>
<button onclick="app.controllers.todoController.removeTodo('${this._id}')"> Remove </button>
      `
      }
}