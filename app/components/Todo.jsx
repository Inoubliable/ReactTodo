var React = require('react');
var moment = require('moment');

import Checkbox from 'material-ui/Checkbox';

class Todo extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		var {id, text, completed, createdAt, completedAt} = this.props;
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
				this.props.onToggle(id);
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

module.exports = Todo;