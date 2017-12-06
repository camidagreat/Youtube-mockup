import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCSVJk2swAR10hDhWXnuh8kCmrLkuDnty4'
// Create new component and show some HTML
// some HTML

const App = function() {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// take component generated HTML and
// put it on the page (in DOM)

ReactDOM.render(<App />, document.querySelector('.container'));
