var React = require('react');
import {List, ListItem} from 'material-ui/List';

var Todo = require('Todo');

class TodoList extends React.Component {

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
						<Todo {...todo} onToggle={this.props.onToggle}></Todo>
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

module.exports = TodoList;