var expect = require('expect');
var df = require('deep-freeze-strict');
var moment = require('moment');

var reducers = require('reducers');

describe('Reducers', () => {
	describe('searchTextReducer', () => {
		it('should set searchText', () => {
			var action = {
				type: 'SET_SEARCH_TEXT',
				searchText: 'test text'
			};
			var res = reducers.searchTextReducer(df(''), df(action));

			expect(res).toEqual(action.searchText);
		});
	});

	describe('showCompletedReducer', () => {
		it('should toggle completed', () => {
			var action = {
				type: 'TOGLE_SHOW_COMPLETED'
			};
			var res = reducers.searchTextReducer(df(false), df(action));

			expect(res).toEqual(!action);
		});
	});

	describe('todosReducer', () => {
		it('should add new todo', () => {
			var action = {
				type: 'ADD_TODO',
				text: 'test text'
			};
			var res = reducers.todosReducer(df(''), df(action));

			expect(res.length).toEqual(1);
			expect(res[0].text).toEqual(action.text);
		});

		it('should toggle todo', () => {
			var action = {
				type: 'TOGGLE_TODO',
				id: 1
			};
			var todos = [{
				id: 1,
				text: 'test text',
				completed: false,
				createdAt: moment().unix(),
				completedAt: undefined
			}];
			var res = reducers.todosReducer(df(todos), df(action));

			expect(res[0].completed).toEqual(!todos[0].completed);
			expect(res[0].completedAt).toNotEqual(undefined);
		});
	});
});