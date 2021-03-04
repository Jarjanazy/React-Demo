import React from 'react';

export default function Car ({ name, prodYear, price }) {
  //return React.createElement("div", {}, [
  //  React.createElement("h2", {}, name),
  //  React.createElement("h2", {}, prodYear),
  //  React.createElement("h2", {}, price),
  //]);

  // this code translates to the one on top
  // this is far more readable that's why we use it
  return (
    <div> 
      <h2>{name}</h2>
      <h2>{prodYear}</h2>
      <h2>{price}</h2>
    </div>
  )


};
