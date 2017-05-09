var React = require('react');
import Checkbox from 'material-ui/Checkbox';

class TodoSearch extends React.Component {

	constructor(props) {
		super(props);
	}

	handleSearch() {
		var showCompleted = this.refs.showCompleted.checked;
		var searchText = this.refs.searchText.value;

		this.props.onSearch(showCompleted, searchText);
	}

	render() {
		var {todos} = this.props;

		return (
			<div>
				<input type="search" placeholder="Search todos" ref="searchText" onChange={this.handleSearch}/>
				<Checkbox
					label="Show completed todos"
					ref="showCompleted"
					onChange={this.handleSearch}
				/>
			</div>
		)
	}

}

module.exports = TodoSearch;