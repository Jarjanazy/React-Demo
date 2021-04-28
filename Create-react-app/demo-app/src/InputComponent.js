import React, {useState} from 'react'



const InputComponent = () =>{
  const [input, setInput] = useState('Hello world');
  const setTheValueToInput = () => setInput(document.getElementById("input").value);

    return (
    <article>
      <h3>{input}</h3>  
      <button onClick={setTheValueToInput}>Change the value</button>
      <textarea id="input"></textarea>
    </article>
    );
  }

export default InputComponent;