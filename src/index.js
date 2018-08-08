// let me access the React
import React, { Component } from 'react';
// React manage the data, react DOM is in charge of the HTML rendering
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'

// set the unchange API key
import YTSearch from 'youtube-api-search'
const API_KEY = 'AIzaSyBJODiOD_9Jab6-mezCwKdNAs6yeterX8I'

// Create a new component. This component should produce some HTML

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: 'rails'}, (videos) => {
      this.setState({ videos })
    })
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video= {this.state.videos[0]}/>
        <VideoList videos={this.state.videos}/>
      </div>
    )
  }
}

// Take this component's generated HTML and put it on the page (in the DOM)
// React DOM need two params, the first is the component,
//                            the second is where to render(target container)
ReactDOM.render(
  <App />,
  document.querySelector('.container')
);
