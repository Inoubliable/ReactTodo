var React = require('react');

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

class TodoApp extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			todos: [
				{
					id: 1,
					text: 'Walk the dog'
				},
				{
					id: 2,
					text: 'Clean the yard'
				},
				{
					id: 3,
					text: 'Sweep the apartment'
				},
				{
					id: 4,
					text: 'Wash the dishes'
				}
			]
		};
	}

	handleAddTodo(text) {
		alert('new todo: ' + text);
	}

	render() {
		var {todos} = this.state;

		return (
			<div>
				<TodoList todos={todos}></TodoList>
				<AddTodo onAddTodo={this.handleAddTodo}></AddTodo>
			</div>
		)
	}

}

module.exports = TodoApp;