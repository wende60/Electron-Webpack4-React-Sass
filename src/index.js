import React, { PureComponent } from 'react';
import ReactDom from 'react-dom';
import './styles/global.scss';
import Home from './components/Home/Home.js';

class App extends PureComponent {
	render() {
		return (
            <Home />
        );
	}
};

ReactDom.render(<App/>, document.getElementById('react-root'));
