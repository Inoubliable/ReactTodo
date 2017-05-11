var React = require('react');
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

var Todo = require('Todo');

class AddTodo extends React.Component {

	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();

		var todoText = this.refs.todoText.input.value;
		if(todoText && todoText != '') {
			this.refs.todoText.value = '';
			this.props.onAddTodo(todoText);
		} else {
			this.refs.todoText.focus();
		}
	}

	render() {
		var {todos} = this.props;

		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<TextField
						hintText="What do you need to do?"
						ref="todoText"
						fullWidth={true}
					/>
					<br/>
					<RaisedButton
						type="submit" 
						label="Add Todo" 
						primary={true} 
						fullWidth={true} 
					/>
				</form>
			</div>
		)
	}

}

module.exports = AddTodo;