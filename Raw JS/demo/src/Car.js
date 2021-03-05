import React from 'react';

export default function Car ({ name, prodYear, price }) {
  const fun = () => "hey from lambda"
  // we must return a single enclosing tag, with everything else inside it 
  return (
    <div> 
      <h1>{fun()}
      </h1>
      <h2>{name}</h2>
      <h2>{prodYear}</h2>
      <h2>{price}</h2>
    </div>
  )
};
