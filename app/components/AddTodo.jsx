var React = require('react');

var Todo = require('Todo');

class AddTodo extends React.Component {

	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();

		var todoText = this.refs.todoText.value;
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
					<input type="text" placeholder="What do you need to do?" ref="todoText"/>
					<input type="submit" value="Add Todo"/>
				</form>
			</div>
		)
	}

}

module.exports = AddTodo;