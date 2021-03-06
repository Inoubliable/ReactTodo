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

export var startAddTodos = () => {
	return (dispatch, getState) => {
		var todosRef = firebaseRef.child('todos');

		todosRef.once('value').then((snapshot) => {
			var todos = snapshot.val() || {};
			var keys = Object.keys(todos);
			var parsedTodos = [];
			keys.forEach((key) => {
				parsedTodos.push({
					id: key,
					...todos[key]
				});
			});
			dispatch(addTodos(parsedTodos));
		});
	};
};

export var toggleShowCompleted = () => {
	return {
		type: 'TOGLE_SHOW_COMPLETED'
	};
};

export var updateTodo = (id, updates) => {
	return {
		type: 'UPDATE_TODO',
		id,
		updates
	};
};

export var startToggleTodo = (id, completed) => {
	return (dispatch, getState) => {
		var todoRef = firebaseRef.child('todos/' + id);
		var updates = {
			completed,
			completedAt: completed ? moment().unix() : null
		};

		todoRef.update(updates).then(() => {
			dispatch(updateTodo(id, updates));
		});
	};
};