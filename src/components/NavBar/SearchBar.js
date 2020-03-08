import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import './SearchBar.css';

class SearchBar extends React.Component {
    
    render () {
        return (
            <div className="searchBarUnFocused">
                <FontAwesomeIcon icon={faSearch} style={{fontSize: '10pt'}} /> Search
            </div>
        )
    }
}

export default SearchBar;