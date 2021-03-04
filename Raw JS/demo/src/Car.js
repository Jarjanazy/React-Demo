import React from 'react';

export default function Car ({ name, prodYear, price }) {
  // we must return a single enclosing tag, with everything else inside it 
  return (
    <div> 
      <h2>{name}</h2>
      <h2>{prodYear}</h2>
      <h2>{price}</h2>
    </div>
  )
};
