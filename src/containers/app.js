import React, { Component } from 'react';
import './app.css';
import Robo from "./robo";
import {connect} from "react-redux";
import {requestRobots, setQuery} from "../actions/action";


const mapStateToProps = state => {
    const { robots, isPending, error } = state.requestRobots
    return {
        query: state.searchRobots.query,
        robots,
        isPending,
        error,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSearchChange: (event) => dispatch(setQuery(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}



class App extends Component {

    componentWillMount() {
        this.props.onRequestRobots()
    }

    render() {
        return (
            <div className='tc'>
                <h1 className='f1'>RoboFriend</h1>
                <Robo {...this.props} />
            </div>
        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App)



