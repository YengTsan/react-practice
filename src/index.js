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

    this.search = this.search.bind(this);
    this.state = {
      videos: [],
      selectedVideo: null
    };

    YTSearch({key: API_KEY, term: 'rails'}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      })
    })
  }

  search(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      })
    })
  }

  render() {
    return (
      <div>
        <SearchBar onVideoSearch= { this.search }/>
        <VideoDetail video= {this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={ selectedVideo => this.setState({selectedVideo}) }
          videos={this.state.videos}/>
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
