import React, { Component } from 'react';
import './App.css';
import Tasks from './Task';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Tasks />
			</div>
		);
	}
}

export default App;