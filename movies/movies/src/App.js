import './App.css';
import {useState} from 'react';


import SearchBar from './application/SearchBar';

function App() {
  const [keyword, setKeyword] = useState("");

 const callAPI = () => {
    const url = `http://www.omdbapi.com/?apikey=4926c71a&t=${keyword}`;
    fetch(url, {})
        .then(res => res.json())
        .then((data) => {console.log(data)})
        .catch(console.log)
  };

  return (
    <div>
      <button type="submit" onClick={callAPI}>Search</button>
      <SearchBar keyword={keyword} setKeyword={setKeyword}/>
    </div>
  );


}

export default App;
