import React from 'react'
import Card from './card';

const CardList = ({robots}) => {
    return (
        <div>
            {robots.map(robot => <Card key={robot.id} robot={robot}></Card>)}
        </div>
    )
}

export default CardList