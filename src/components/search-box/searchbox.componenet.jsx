import * as React from 'react';
import { Component } from 'react';
import './searchbox.componenet.css';

class SearchBox extends Component {

    render() {
        let { onSearchChange } = this.props;
        return (
            <input
                className="search-box"
                id="search-box"
                type="search"
                placeholder="Search Monsters"
                onChange={onSearchChange} />
        )
    }
}

export default SearchBox