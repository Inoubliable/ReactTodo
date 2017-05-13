var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {TodoSearch} from 'TodoSearch';

describe('TodoSearch', () => {
	it('should exist', () => {
		expect(TodoSearch).toExist();
	});

	it('should dispatch SET_SEARCH_TEXT on input change', () => {
		var searchText = 'dog';
		var action = {
			type: 'SET_SEARCH_TEXT',
			searchText
		};
		var spy = expect.createSpy();
		var themeProvider = TestUtils.renderIntoDocument(<MuiThemeProvider><TodoSearch dispatch={spy}/></MuiThemeProvider>);
		var todoSearch = TestUtils.scryRenderedComponentsWithType(themeProvider, TodoSearch)[0];

		todoSearch.refs.searchText.value = searchText;
	    TestUtils.Simulate.change(todoSearch.refs.searchText);

	    expect(spy).toHaveBeenCalledWith(action);
	});

	it('should dispatch TOGGLE_SHOW_COMPLETED when checkbox checked', () => {
		var spy = expect.createSpy();
		var action = {
			type: 'TOGGLE_SHOW_COMPLETED'
		};
		var themeProvider = TestUtils.renderIntoDocument(<MuiThemeProvider><TodoSearch dispatch={spy}/></MuiThemeProvider>);
		var todoSearch = TestUtils.scryRenderedComponentsWithType(themeProvider, TodoSearch)[0];

		todoSearch.refs.showCompleted.checked = true;
		TestUtils.Simulate.change(todoSearch.refs.showCompleted);

		expect(spy).toHaveBeenCalledWith(action);
	});
});