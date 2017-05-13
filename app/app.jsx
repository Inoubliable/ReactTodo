var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

var TodoApp = require('TodoApp');

var actions = require('actions');
var store = require('configureStore').configure();

store.dispatch(actions.addTodo('Clean the yard'));
store.dispatch(actions.setSearchText('yard'));
store.dispatch(actions.toggleShowCompleted());

// app css
require('style-loader!css-loader!sass-loader!applicationStyles');

const muiTheme = getMuiTheme({
	
});

ReactDOM.render(
	<MuiThemeProvider muiTheme={muiTheme}>
		<Provider store={store}>
			<TodoApp></TodoApp>
		</Provider>
	</MuiThemeProvider>,
	document.getElementById('app')
);