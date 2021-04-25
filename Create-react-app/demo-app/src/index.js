import React from 'react'
import ReactDom from 'react-dom'


const ImageComponent = ({x, y}) =>{
  return (
  <article>
    <h2>{x}</h2>
    <h2>{y}</h2>
  </article>
  );
}

function Greeting(){
  return (
    <div>
      <ImageComponent x='10' y='20'/>
      <ImageComponent x={30} y={40}/>
    </div>
  );
}



ReactDom.render(<Greeting/>, document.getElementById('root'));