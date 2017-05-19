var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';

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
	}

	render() {
		return (
			<div>
				<FlatButton href="#" label="Logout" primary={true} className="logout-btn"/>
				<Card zDepth={2} style={style.mainCard}>
					<CardTitle title="Todo App" titleStyle={{textAlign: 'center'}}/>
					<CardText>
						<TodoSearch></TodoSearch>
						<Divider style={style.divider}/>
						<TodoList></TodoList>
						<Divider style={style.divider}/>
						<AddTodo></AddTodo>
					</CardText>
				</Card>
			</div>
		)
	}

}

module.exports = TodoApp;