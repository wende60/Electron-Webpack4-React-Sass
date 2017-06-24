import './Home.scss';
import React, { PropTypes, Component } from 'react';

const isElectron = process.env.NODE_ENV === 'electron' ? true : false;
let ipcRenderer = false;
if (isElectron) {
    ipcRenderer = require('electron').ipcRenderer;
}



class Home extends Component {

    createFile = () => {
        if (ipcRenderer) {
            // send to main process
            ipcRenderer.sendSync('synchronous-message', 'this is the content of my electron message');
        } else {
            alert('Not available in the \'web\' environment');
        }
    }

    render() {
        return (
            <div className='homeWrapper'>
                <h2>Boilerplate for a cool Electron App</h2>
                <p>Develop your Electron-app with Electron, Webpack 2, React and Sass</p>
                <p>
                    If you want to communicate with electrons main process
                    you can create a condition based on the environment to
                    load e.g. the ipcRenderer only in the electron environment
                </p>
                <p>You are in this environment: {process.env.NODE_ENV}</p>
                <p onClick={this.createFile} className="button">Try create a test file</p>
            </div>
        );
    }
};

export default Home;

