import moment from 'moment';

import firebase, {firebaseRef} from 'index';

export var setSearchText = (searchText) => {
	return {
		type: 'SET_SEARCH_TEXT',
		searchText
	};
};

export var addTodo = (todo) => {
	return {
		type: 'ADD_TODO',
		todo
	};
};

export var startAddTodo = (text) => {
	return (dispatch, getState) => {
		var todo = {
			text: text,
			completed: false,
			createdAt: moment().unix(),
			completedAt: null
		};
		var todoRef = firebaseRef.child('todos').push(todo);

		todoRef.then(() => {
			dispatch(addTodo({
				...todo,
				id: todoRef.key
			}));
		});
	};
};

export var addTodos = (todos) => {
	return {
		type: 'ADD_TODOS',
		todos
	};
};

export var toggleShowCompleted = () => {
	return {
		type: 'TOGLE_SHOW_COMPLETED'
	};
};

export var toggleTodo = (id) => {
	return {
		type: 'TOGGLE_TODO',
		id
	};
};