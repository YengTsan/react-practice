// let me access the React
import React from 'react';
// React manage the data, react DOM is in charge of the HTML rendering
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

// set the unchange API key
import YTSearch from 'youtube-api-search'
const API_KEY = 'AIzaSyBJODiOD_9Jab6-mezCwKdNAs6yeterX8I'

YTSearch({key: API_KEY, term: 'surboards'}, (data) => {
  console.log(data)
})

// Create a new component. This component should produce some HTML

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  )
}

// Take this component's generated HTML and put it on the page (in the DOM)
// React DOM need two params, the first is the component,
//                            the second is where to render(target container)
ReactDOM.render(
  <App />,
  document.querySelector('.container')
);
