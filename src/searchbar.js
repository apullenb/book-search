import React, { Component } from 'react';
import SearchBox from './searchbox.js'
import FilterOptions from './filteroptions'


class Searchbar extends Component {
  
  
    render() {
        return (
          <div className="SearchBar">
            <div className="SearchBar__heading">
              <h3>Book Search</h3>
            </div>
            <form>
            <div className="SearchBar__controls">
              <SearchBox/>
              <FilterOptions/>
            </div>
            </form>
          </div>
        )
    }


}

export default Searchbar;