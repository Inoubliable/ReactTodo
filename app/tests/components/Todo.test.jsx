var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

var {Todo} = require('Todo');

describe('Todo', () => {
	it('should exist', () => {
		expect(Todo).toExist();
	});

	it('should dispatch TOGGLE_TODO action on click', () => {
		var todoData = {
			id: 123,
			text: 'Test text',
			completed: true
		}
		var spy = expect.createSpy();
		var themeProvider = TestUtils.renderIntoDocument(<MuiThemeProvider><Todo {...todoData} dispatch={spy}/></MuiThemeProvider>);
		var todo = TestUtils.scryRenderedComponentsWithType(themeProvider, Todo)[0];
		var $el = $(ReactDOM.findDOMNode(todo));

		TestUtils.Simulate.click($el[0]);

		expect(spy).toHaveBeenCalledWith({
			type: 'TOGGLE_TODO',
			id: todoData.id
		});
	});
});