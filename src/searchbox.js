import React, { Component } from 'react';

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''}
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({value: e.target.value});
    console.log(this.state)
     
  }
  render() {
      return (
        <div className="SearchBox">
          <input placeholder="Search term"/>
          <button onClick= {this.handleSubmit}>Search</button>
        </div>   
      );
    }
  }
  
  export default SearchBox;