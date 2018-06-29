import React, { Component } from 'react';
import ErrorBoundry from "../components/error-boundry";
import Scroll from "../components/scroll";
import CardList from "../components/card-list";
import {connect} from "react-redux";
import {requestRobots, setQuery} from "../actions/action";
import SearchBox from "../components/search-box";

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

class Robo extends Component {

    componentWillMount() {
        this.props.onRequestRobots()
    }

    render() {
        const { robots, isPending, query, onSearchChange } = this.props
        const filterRobot = robots.filter(
            ele => ele.name.toLowerCase().includes(query.toLowerCase())
        )
        return (
            <div>
                <SearchBox searchChange={onSearchChange}/>
                <Scroll>
                {
                    isPending ?
                        <h1>...LOADING</h1> :
                        <ErrorBoundry>
                            <CardList robots={filterRobot} />
                        </ErrorBoundry>

                }
                </Scroll>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Robo)
