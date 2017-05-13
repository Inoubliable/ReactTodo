var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');
import Checkbox from 'material-ui/Checkbox';
import TextField from 'material-ui/TextField';

export class TodoSearch extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		var {dispatch, showCompleted, searchText} = this.props;

		return (
			<div>
				<TextField
					hintText="Search todos"
					ref="searchText"
					fullWidth={true}
					value={searchText}
					onChange={() => {
						var searchText = this.refs.searchText.input.value;
						dispatch(actions.setSearchText(searchText));
					}}
				/>
				<Checkbox
					label="Show completed todos"
					ref="showCompleted"
					checked={showCompleted}
					onClick={() => {
						dispatch(actions.toggleShowCompleted());
					}}
				/>
			</div>
		)
	}

}

export default connect(
	(state) => {
		return {
			showCompleted: state.showCompleted,
			searchText: state.searchText
		};
	}
)(TodoSearch);