// let me access the React
import React from 'react';
// React manage the data, react DOM is in charge of the HTML rendering
import ReactDOM from 'react-dom';
// set the unchange API key
const API_KEY = 'AIzaSyBWXIx3IbZRMPqB1fVPtv7MCYLuW-DP8R4'

// Create a new component. This component should produce some HTML

const App = () => {
  return <div>Hi!</div>
}

// Take this component's generated HTML and put it on the page (in the DOM)
// React DOM need two params, the first is the component,
//                            the second is where to render(target container)
ReactDOM.render(
  <App />,
  document.querySelector('.container')
);
