var React = require('react');

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

var uuid = require('node-uuid');

class TodoApp extends React.Component {

	constructor(props) {
		super(props);
		this.handleAddTodo = this.handleAddTodo.bind(this);
		this.state = {
			showCompleted: false,
			searchText: '',
			todos: [
				{
					id: uuid(),
					text: 'Walk the dog'
				},
				{
					id: uuid(),
					text: 'Clean the yard'
				},
				{
					id: uuid(),
					text: 'Sweep the apartment'
				},
				{
					id: uuid(),
					text: 'Wash the dishes'
				}
			]
		};
	}

	handleAddTodo(text) {
		this.setState({
			todos: [...this.state.todos,
				{
					id: uuid(),
					text: text
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

	render() {
		var {todos} = this.state;

		return (
			<div>
				<TodoSearch onSearch={this.handleSearch}></TodoSearch>
				<TodoList todos={todos}></TodoList>
				<AddTodo onAddTodo={this.handleAddTodo}></AddTodo>
			</div>
		)
	}

}

module.exports = TodoApp;