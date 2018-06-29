import React, { Component } from 'react';
import './app.css';
import Robo from "./robot";



class App extends Component {

    render() {
        return (
            <div className='tc'>
                <h1 className='f1'>RoboFriend</h1>
                <Robo/>
            </div>
        )
    }
}

export default App


