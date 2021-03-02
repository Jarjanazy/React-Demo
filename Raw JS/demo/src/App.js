import React from 'react';
import {render} from 'react-dom';
// those imports work because we isntalled react and react-dom using the command
// npm i react react-dom
// we don't need to load them online anymore

import Car from './Car';

// create a component called App
const App = () => {
  return React.createElement(
    "div", // what kind of tag you want
    {}, // componenet attributes, id, name for example
    [
      Car({
        name: "Jeep",
        prodYear: "2020",
        price: "10k",
      }),
      Car({
        name: "Ford",
        prodYear: "2018",
        price: "8k",
      }),
    ]
  );
};

// render this React component to this div
render(React.createElement(App), document.getElementById("root"));
