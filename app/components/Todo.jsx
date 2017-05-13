var React = require('react');
var moment = require('moment');
var {connect} = require('react-redux');
var actions = require('actions');

import Checkbox from 'material-ui/Checkbox';

export class Todo extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		var {id, text, completed, createdAt, completedAt, dispatch} = this.props;
		var renderDate = () => {
			var message = 'Created ';
			var timestamp = createdAt;

			if(completed) {
				message = 'Completed ';
				timestamp = completedAt;
			}

			return message + moment.unix(timestamp).format('MMM Do YYYY H:mm');
		};
		var todoClass = '';
		if(completed) {
			todoClass = 'todo-completed';
		}

		return (
			<div onClick={() => {
				dispatch(actions.toggleTodo(id));
			}}>
				<Checkbox
					label={
						<div className={todoClass}>
							<p className="todo-text">{text}</p>
							<small className="todo-timestamp">{renderDate()}</small>
						</div>
					}
					checked={completed}
				/>
			</div>
		)
	}

}

export default connect()(Todo);