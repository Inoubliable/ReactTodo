var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

var TodoSearch = require('TodoSearch');

describe('TodoSearch', () => {
	it('should exist', () => {
		expect(TodoSearch).toExist();
	});

	it('should call onSearch with entered input text', () => {
		var searchText = 'dog';
		var spy = expect.createSpy();
		var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);

		this.refs.searchText.value = searchText;
		TestUtils.Simulate.change(todoSearch);

		expect(spy).toHaveBeenCalledWith(false, 'dog');
	});

	it('should call onSearch with proper checked value', () => {
		var spy = expect.createSpy();
		var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);

		this.refs.showCompleted.checked = true;
		TestUtils.Simulate.change(todoSearch);

		expect(spy).toHaveBeenCalledWith(true, '');
	});
});