var React = require('react');
var {connect} = require('react-redux');
import {List, ListItem} from 'material-ui/List';

import Todo from 'Todo';
var TodoAPI = require('TodoAPI');

export class TodoList extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		var {todos, showCompleted, searchText} = this.props;

		var renderTodos = () => {
			var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);
			if(filteredTodos.length == 0) {
				return (
					<p className="no-todos-msg">Nothing to do</p>
				);
			};
			return filteredTodos.map((todo) => {
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
		return state;
	}
)(TodoList);