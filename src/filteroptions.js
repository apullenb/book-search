import React, { Component } from "react";



class FilterOptions extends Component {
  render() {
    return (
      <div className="FilterOptions">
        <h4>Filter By:</h4>
        <label htmlFor="print-type">Print Type</label>
        <select name="filter-print" id="filter-print">
          <option value="All">All</option>
          <option value="All">All</option>
          <option value="All">All</option>
          <option value="All">All</option>
        </select>
        <label htmlFor="book-type">Book Type</label>
        <select name="filter-print" id="filter-print">
          <option value="All">All</option>
          <option value="All">All</option>
          <option value="All">All</option>
          <option value="All">All</option>
        </select>
      </div>
    );
  }
}

export default FilterOptions;
