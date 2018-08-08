import React, { Component } from 'react';
// Component inside the import funciton means pull out the `Component` in the React property
// and name it to the varaible `Component`
// const Component = React.Component;

class SearchBar extends Component  {
  constructor(props) {
    super(props);

    this.state = { term: '' };
    // when the state has been changed, the component would rerender.
  }

  render() {
    return(
      <div className='search-bar'>
        <input
          value={this.state.term}
          onChange={(event) => {
            this.setState({term: event.target.value});
            this.props.onVideoSearch(event.target.value);
          }} />
      </div>
    )
  }
}

export default SearchBar;