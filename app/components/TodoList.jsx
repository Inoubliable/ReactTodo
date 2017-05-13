var React = require('react');
var {connect} = require('react-redux');
import {List, ListItem} from 'material-ui/List';

import Todo from 'Todo';

export class TodoList extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		var {todos} = this.props;

		var renderTodos = () => {
			if(todos.length == 0) {
				return (
					<p className="no-todos-msg">Nothing to do</p>
				);
			};
			return todos.map((todo) => {
				return (
					<ListItem key={todo.id}>
						<Todo {...todo}></Todo>
					</ListItem>
				)
			});
		};

		return (
			<List>
				{renderTodos()}
			</List>
		)
	}

}

export default connect(
	(state) => {
		return {
			todos: state.todos
		};
	}
)(TodoList);