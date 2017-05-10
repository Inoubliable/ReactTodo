var React = require('react');
import Checkbox from 'material-ui/Checkbox';

class Todo extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		var {id, text, completed} = this.props;

		return (
			<div onClick={() => {
				this.props.onToggle(id);
			}}>
				<Checkbox
					label={text}
					checked={completed}
				/>
			</div>
		)
	}

}

module.exports = Todo;