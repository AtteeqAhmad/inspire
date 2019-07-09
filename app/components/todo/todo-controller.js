import TodoService from "./todo-service.js";

const _todoService = new TodoService()

function _drawTodos() {
	let todosElem = document.querySelector('#todo')
	let template = ''
	let todos = _todoService.Todos
	todos.forEach(t => {
		template += t.Template
	})
	todosElem.innerHTML = template
	console.log("Todo works:", todos)
	//WHAT IS MY PURPOSE?
}



//function _drawError() {
//	console.error('[TODO ERROR]', _todoService.TodoError)
//	document.querySelector('#todo-error').textContent = `${_todoService.TodoError.message}`
// }


export default class TodoController {
	constructor() {
		console.log("todo controller works")
		// _todoService.addSubscriber('error', _drawError)
		_todoService.addSubscriber('todos', _drawTodos)
		_todoService.getTodos()
		// Don't forget to add your subscriber
	}

	addTodo(e) {
		e.preventDefault()
		var form = e.target
		var todo = {
			description: form.description.value
			// DONT FORGET TO BUILD YOUR TODO OBJECT

		}
		form.reset()

		_todoService.addTodo(todo)
	}

	toggleTodoStatus(todoId) {
		// asks the service to edit the todo status
		_todoService.toggleTodoStatus(todoId)
	}

	removeTodo(_id) {
		// ask the service to run the remove todo with this id
		_todoService.removeTodo(_id)
	}



}
