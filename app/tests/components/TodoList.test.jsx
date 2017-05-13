var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {configure} from 'configureStore';
import ConnectedTodoList, {TodoList} from 'TodoList';
import ConnectedTodo, {Todo} from 'Todo';

describe('TodoList', () => {
	it('should exist', () => {
		expect(TodoList).toExist();
	});

	it('should render one Todo for each todo item', () => {
		var todos = [
			{
				id: 1,
				text: 'something',
				completed: false,
				completedAt: undefined,
				createdAt: 500
			},
			{
				id: 2,
				text: 'something else',
				completed: false,
				completedAt: undefined,
				createdAt: 500
			}
		];

		var store = configure(
			todos: todos
		);
		var themeProvider = TestUtils.renderIntoDocument(
			<MuiThemeProvider>
				<Provider store={store}>
					<ConnectedTodoList></ConnectedTodoList>
				</Provider>
			</MuiThemeProvider>
		);
		var provider = TestUtils.scryRenderedComponentsWithType(themeProvider, Provider)[0];
		var todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0];
		var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, ConnectedTodo);

		expect(todosComponents.length).toBe(todos.length);
	});
});