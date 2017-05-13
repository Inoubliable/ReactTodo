var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
var TodoSearch = require('TodoSearch');
var TodoAPI = require('TodoAPI');

const style = {
	searchPaper: {
		marginBottom: 20,
		padding: 10
	},
	mainCard: {
		width: 600,
		margin: 'auto'
	},
	divider: {
		marginTop: 20,
		marginBottom: 20
	},
};

class TodoApp extends React.Component {

	constructor(props) {
		super(props);
		this.handleAddTodo = this.handleAddTodo.bind(this);
		this.handleSearch = this.handleSearch.bind(this);
		this.state = {
			showCompleted: false,
			searchText: '',
			todos: TodoAPI.getTodos()
		};
	}

	componentDidUpdate() {
		TodoAPI.setTodos(this.state.todos);
	}

	handleAddTodo(text) {
		this.setState({
			todos: [...this.state.todos,
				{
					id: uuid(),
					text: text,
					completed: false,
					createdAt: moment().unix(),
					completedAt: undefined
				}
			]
		});
	}

	handleSearch(showCompleted, searchText) {
		this.setState({
			showCompleted: showCompleted,
			searchText: searchText.toLowerCase()
		});
	}

	render() {
		var {todos, showCompleted, searchText} = this.state;
		var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

		return (
			<div>
				<Card zDepth={2} style={style.mainCard}>
					<CardTitle title="Todo App" titleStyle={{textAlign: 'center'}}/>
					<CardText>
						<TodoSearch onSearch={this.handleSearch}></TodoSearch>
						<Divider style={style.divider}/>
						<TodoList></TodoList>
						<Divider style={style.divider}/>
						<AddTodo onAddTodo={this.handleAddTodo}></AddTodo>
					</CardText>
				</Card>
			</div>
		)
	}

}

module.exports = TodoApp;