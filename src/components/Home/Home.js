import './Home.scss';
import React, { Component } from 'react';

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
                <p>Develop your Electron-app with Electron, Webpack 4, React and Sass</p>
                <p>
                    If you want to communicate with electrons main process
                    you can create a condition based on the environment to
                    load e.g. the ipcRenderer only in the electron environment
                </p>
                <p>You are in this environment: {process.env.NODE_ENV}</p>
                <p onClick={this.createFile} className="button">Try create a test file</p>
                <ul>
                    <li><b>npm install</b> to unstall all npm modules</li>
                    <li><b>npm run web</b> to test app in a webbrowser (electron main process functionality is not available)</li>
                    <li><b>npm run electronDebug</b> to open electron window with console output</li>
                    <li><b>npm run electron</b> to open electron window without console output</li>
                    <li><b>npm run bin</b> to create app for mac (win and linux are in place, edit package.json to integrate it) </li>
                </ul>
            </div>
        );
    }
};

export default Home;

