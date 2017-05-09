var React = require('react');

var TodoList = require('TodoList');

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

	render() {
		var {todos} = this.state;

		return (
			<div>
				<TodoList todos={todos}></TodoList>
			</div>
		)
	}

}

module.exports = TodoApp;