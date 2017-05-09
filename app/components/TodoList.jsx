var React = require('react');

var Todo = require('Todo');

class TodoList extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		var {todos} = this.props;

		var renderTodos = () => {
			return todos.map((todo) => {
				return (
					<Todo key={todo.id} {...todo}></Todo>
				)
			});
		};

		return (
			<div>
				{renderTodos()}
			</div>
		)
	}

}

module.exports = TodoList;