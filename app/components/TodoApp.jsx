var React = require('react');

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

var uuid = require('node-uuid');

class TodoApp extends React.Component {

	constructor(props) {
		super(props);
		this.handleAddTodo = this.handleAddTodo.bind(this);
		this.handleToggle = this.handleToggle.bind(this);
		this.state = {
			showCompleted: false,
			searchText: '',
			todos: [
				{
					id: uuid(),
					text: 'Walk the dog',
					completed: false
				},
				{
					id: uuid(),
					text: 'Clean the yard',
					completed: true
				},
				{
					id: uuid(),
					text: 'Sweep the apartment',
					completed: true
				},
				{
					id: uuid(),
					text: 'Wash the dishes',
					completed: false
				}
			]
		};
	}

	handleAddTodo(text) {
		this.setState({
			todos: [...this.state.todos,
				{
					id: uuid(),
					text: text,
					completed: false
				}
			]
		});
	}

	handleSearch(showCompleted, searchText) {
		this.setState({
			showCompleted: showCompleted,
			searchText: searchText.toLowerCase()
		});
	}

	handleToggle(id) {
		var updatedTodos = this.state.todos.map((todo) => {
			if(todo.id == id) {
				todo.completed = !todo.completed;
			}
			return todo;
		});

		this.setState({
			todos: updatedTodos
		});
	}

	render() {
		var {todos} = this.state;

		return (
			<div>
				<TodoSearch onSearch={this.handleSearch}></TodoSearch>
				<TodoList todos={todos} onToggle={this.handleToggle}></TodoList>
				<AddTodo onAddTodo={this.handleAddTodo}></AddTodo>
			</div>
		)
	}

}

module.exports = TodoApp;