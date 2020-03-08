import React from 'react';
import Navbar from './components/NavBar/NavBar';
import Body from './components/MainBody/Body';

class App extends React.Component {

	render() {
		return (
			<div>
				<Navbar	/>
				<Body />
			</div>
		)
	}

}

export default App;