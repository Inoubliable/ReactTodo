var React = require('react');
import Checkbox from 'material-ui/Checkbox';
import TextField from 'material-ui/TextField';

class TodoSearch extends React.Component {

	constructor(props) {
		super(props);
		this.handleSearch = this.handleSearch.bind(this);
	}

	handleSearch() {
		var showCompleted = !this.refs.showCompleted.state.switched;
		var searchText = this.refs.searchText.input.value;

		this.props.onSearch(showCompleted, searchText);
	}

	render() {
		var {todos} = this.props;

		return (
			<div onChange={this.handleSearch}>
				<TextField
					hintText="Search todos"
					ref="searchText"
					fullWidth={true}
				/>
				<Checkbox
					label="Show completed todos"
					ref="showCompleted"
				/>
			</div>
		)
	}

}

module.exports = TodoSearch;