import './App.css';
import {useEffect} from 'react';

function App() {

  useEffect(() => {
    fetch('http://www.omdbapi.com/?apikey=4926c71a&i=tt3896198', {})
        .then(res => res.json())
        .then((data) => {console.log(data)})
        .catch(console.log)
  });
  return (
    <h2> HELLO </h2>
  );
}

export default App;
