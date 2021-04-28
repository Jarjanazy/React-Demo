import React from 'react'
import ReactDom from 'react-dom'

import InputComponent from './InputComponent.js'
function Greeting(){
  return (
    <div>
      <InputComponent/>
    </div>
  );
}

ReactDom.render(<Greeting/>, document.getElementById('root'));