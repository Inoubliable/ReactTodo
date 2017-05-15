var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

var Todo = require('Todo');

export class AddTodo extends React.Component {

	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();

		var {dispatch} = this.props;
		var todoText = this.refs.todoText.input.value;
		if(todoText && todoText != '') {
			this.refs.todoText.input.value = '';
			dispatch(actions.startAddTodo(todoText));
		} else {
			this.refs.todoText.focus();
		}
	}

	render() {
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

export default connect()(AddTodo);