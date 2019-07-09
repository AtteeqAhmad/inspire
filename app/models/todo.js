export default class Todo {
      constructor(data) {
            this.completed = data.completed
            this.description = data.description
            this._id = data._id
            this.removeTodo = data.delete
            console.log('todo data', data)
      }



      get Template() {
            return `
            <h4>${this.description}
            <button onclick="app.controllers.todoController.removeTodo('${this._id}')"> Remove </button>
            </h4>
            `
      }
}