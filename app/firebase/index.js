import firebase from 'firebase';

try {
	var config = {
	    apiKey: "AIzaSyATSnrhYW8hpKeolvkvDBUVVdiUVg5QPtM",
	    authDomain: "react-todo-app-70dc2.firebaseapp.com",
	    databaseURL: "https://react-todo-app-70dc2.firebaseio.com",
	    projectId: "react-todo-app-70dc2",
	    storageBucket: "react-todo-app-70dc2.appspot.com",
	    messagingSenderId: "308604427675"
	  };
	  firebase.initializeApp(config);
} catch(e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;