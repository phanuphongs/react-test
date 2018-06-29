import React from 'react';

const SearchBox = ({ searchChange }) => {
    return (
        <div className='pa2'>
            <input
                className='pa3 ba b--green bg-light-blue'
                type='search'
                onChange={searchChange}
                placeholder='Search Robot'/>
        </div>
    )
}

export default SearchBox