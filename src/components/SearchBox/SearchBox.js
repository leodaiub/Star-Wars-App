import React from 'react';
import './SearchBox.css';

const SearchBox = ({searchField, searchChange}) => {
    return(
        <div className='search'>
            <input
                className='searchBox'
                type='search'
                placeholder='Search Planets'
                           
            />
        </div>
    )
}
export default SearchBox;