import React from 'react';
import {render} from 'react-dom';
import SearchParams from './SearchParams';

// create a component called App
const App = () => {
  return (
    <div>
      <SearchParams/>
    </div>
  )
};

// render this React component to this div
render(<App/>, document.getElementById("root"));
