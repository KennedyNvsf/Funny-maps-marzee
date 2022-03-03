import React from 'react';
import "./search-box.styles.scss";


const SearchBox = ({searchChange, search}) => {

    return (

        <div className="searchbox">

            <input className="searchInput" type="search" placeholder="Search Users" onChange={searchChange} />

        </div>
 
    )
}

export default SearchBox;