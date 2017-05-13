var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

var {AddTodo} = require('AddTodo');

describe('AddTodo', () => {
	it('should exist', () => {
		expect(AddTodo).toExist();
	});

	it('should dispatch ADD_TODO when valid todo text', () => {
		var todoText = 'something';
		var action = {
			type: 'ADD_TODO',
			text: todoText
		};
		var spy = expect.createSpy();
		var themeProvider = TestUtils.renderIntoDocument(<MuiThemeProvider><AddTodo dispatch={spy}/></MuiThemeProvider>);
		var addTodo = TestUtils.scryRenderedComponentsWithType(themeProvider, AddTodo)[0];
		var $el = $(ReactDOM.findDOMNode(addTodo));

		addTodo.refs.todoText.value = todoText;
		TestUtils.Simulate.submit($el.find('form')[0]);

		expect(spy).toHaveBeenCalledWith(action);
	});

	it('should not dispatch ADD_TODO when invalid todo text', () => {
		var todoText = '';
		var spy = expect.createSpy();
		var themeProvider = TestUtils.renderIntoDocument(<MuiThemeProvider><AddTodo dispatch={spy}/></MuiThemeProvider>);
		var addTodo = TestUtils.scryRenderedComponentsWithType(themeProvider, AddTodo)[0];
		var $el = $(ReactDOM.findDOMNode(addTodo));

		addTodo.refs.todoText.value = todoText;
		TestUtils.Simulate.submit($el.find('form')[0]);

		expect(spy).toNotHaveBeenCalled();
	});
});