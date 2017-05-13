var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

var configureStore = require('configureStore');

var TodoApp = require('TodoApp');
import TodoList from 'TodoList';

describe('TodoApp', () => {
	it('should exist', () => {
		expect(TodoApp).toExist();
	});

	it('should render TodoList', () => {
		var store = configureStore.configure();
		var themeProvider = TestUtils.renderIntoDocument(
			<MuiThemeProvider>
				<Provider store={store}>
					<TodoApp></TodoApp>
				</Provider>
			</MuiThemeProvider>
		);

		var provider = TestUtils.scryRenderedComponentsWithType(themeProvider, Provider)[0];
		var todoApp = TestUtils.scryRenderedComponentsWithType(provider, TodoApp)[0];
		var todoList = TestUtils.scryRenderedComponentsWithType(todoApp, TodoList);

		expect(todoList.length).toEqual(1);
	});
});