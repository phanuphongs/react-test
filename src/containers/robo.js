import React, { Component } from 'react';
import ErrorBoundry from "../components/error-boundry";
import Scroll from "../components/scroll";
import CardList from "../components/card-list";
import SearchBox from "../components/search-box";


class Robo extends Component {

    filterRobot = (robots, query) => {
        return robots.filter(
            ele => ele.name.toLowerCase().includes(query.toLowerCase())
        )
    }

    render() {
        const { robots, isPending, query, onSearchChange } = this.props
        return (
            <div>
                <SearchBox searchChange={onSearchChange}/>
                <Scroll>
                {
                    isPending ?
                        <h1>...LOADING</h1> :
                        <ErrorBoundry>
                            <CardList robots={this.filterRobot(robots, query)} />
                        </ErrorBoundry>

                }
                </Scroll>
            </div>
        )
    }
}

export default Robo
