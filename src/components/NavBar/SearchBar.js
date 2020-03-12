import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {

    state = {
        isFocused: false,
    }
    
    switchToFocused() {
        this.setState({
            isFocused: true,
        })
    }

    switchToUnFocused() {
        this.setState({
            isFocused: false,
        })
    }


    render () {
        return (
            <div className="searchBarUnFocused">
                <form>
                    <input type="text" placeholder="Search" className="searchbar" />
                </form>
            </div>
        )
    }
}

export default SearchBar;