import Todo from "../../models/todo.js";

// @ts-ignore
const todoApi = axios.create({
	baseURL: 'https://bcw-sandbox.herokuapp.com/api/Ateq/todos/',
	timeout: 6000
});

let _state = {
	todos: [],
	error: {}
}
let _subscribers = {
	todos: [],
	error: []
}

function _setState(prop, data) {
	_state[prop] = data
	_subscribers[prop].forEach(fn => fn())
}

export default class TodoService {
	get Todos() {
		return _state.todos
	}
	get TodoError() {
		return _state.error
	}

	addSubscriber(prop, fn) {
		_subscribers[prop].push(fn)
	}

	getTodos() {
		console.log("Getting the Todo List")
		todoApi.get()
			.then(res => {
				let todos = res.data.data.map(t => new Todo(t))
				_setState("todos", todos)
				// WHAT DO YOU DO WITH THE RESPONSE?
			})
		// .catch(err => _setState('error', err.response.data))
	}

	addTodo(todo) {
		todoApi.post('', todo)
			.then(res => {
				setState('todos', todos)
				console.log("addlist is working", res.data)
				this.getTodos('#todos')
				onsubmit
				// WHAT DO YOU DO AFTER CREATING A NEW TODO?
			})
			.catch(err => _setState('error', err.response))
	}

	toggleTodoStatus(todoId) {
		let todo = _state.todos.find(todo => todo._id == todoId)
		// Be sure to change the completed property to its opposite
		todo.completed = !todo.completed
		todoApi.put(todoId, todo)
			.then(res => {
				this.getTodos()
				//DO YOU WANT TO DO ANYTHING WITH THIS?
			})
			.catch(err => _setState('error', err.response.data))
	}

	removeTodo(_id) {
		todoApi.delete('', _id)
			.then(res => {
				this.getTodos()
				console.log(res.data.data)
			})
			.catch(err => _setState('error', err.response.data))
		// The http method is delete at the todoId

	}

}
