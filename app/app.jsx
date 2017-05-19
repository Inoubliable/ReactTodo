var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var {Provider} = require('react-redux');
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

var TodoApp = require('TodoApp');
var Login = require('Login');

var actions = require('actions');
var store = require('configureStore').configure();
var TodoAPI = require('TodoAPI');

store.dispatch(actions.startAddTodos());

// app css
require('style-loader!css-loader!sass-loader!applicationStyles');

const muiTheme = getMuiTheme({
	
});

ReactDOM.render(
	<MuiThemeProvider muiTheme={muiTheme}>
		<Provider store={store}>
			<Router history={hashHistory}>
				<Route path="/">
					<IndexRoute component={Login}></IndexRoute>
					<Route path="todos" component={TodoApp}></Route>
				</Route>
			</Router>
		</Provider>
	</MuiThemeProvider>,
	document.getElementById('app')
);