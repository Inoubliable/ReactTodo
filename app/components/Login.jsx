var React = require('react');
import {Card, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
var {connect} = require('react-redux');
var actions = require('actions');

import Checkbox from 'material-ui/Checkbox';

class Login extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<h1 className="main-title">Todo App</h1>
				<Card className="login-card">
					<CardTitle title="Login" subtitle="Login with Github account below" />
					<CardText>
						<RaisedButton label="Login with Github" primary={true}/>
					</CardText>
				</Card>
			</div>
		)
	}

}

module.exports = Login;