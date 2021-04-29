import React, {useState} from 'react'

const InputComponent = () =>{
  const [input, setInput] = useState({
    "key" : "hello key",
    "value" : "hello value"
  });

  const setTheValueToKey = () => {
    const key = document.getElementById("key").value;
    setInput({...input, "key" : key})
  };
  const setTheValueToValue = () => {
    const value = document.getElementById("value").value;
    setInput({...input, "value" : value});
  };

    return (
    <article>
      <h3>key is {input.key}</h3>
      <h3>value is {input.value}</h3>  

      <button onClick={setTheValueToKey}>Change the key</button>
      <button onClick={setTheValueToValue}>Change the value</button>

      <textarea id="key"></textarea>
      <textarea id="value"></textarea>
    </article>
    );
  }

export default InputComponent;