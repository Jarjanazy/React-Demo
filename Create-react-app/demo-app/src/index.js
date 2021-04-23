import React from 'react'
import ReactDom from 'react-dom'


function Greeting(){
  return <h2>Hey man</h2>
}

ReactDom.render(<Greeting/>, document.getElementById('root'));