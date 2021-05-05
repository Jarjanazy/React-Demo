import './App.css';
import {useState} from 'react';

import SearchBar from './application/SearchBar';
import Movie from './domain/Movie';

const objectIsEmpty = (obj) => {
  return obj && Object.keys(obj).length === 0 && obj.constructor === Object;
}

const setApiResponseToMovie = (response, setMovie) => {
  console.log(response);

  if (response.Response === "False"){
    setMovie({"Title" : "No Such Movie"});
  }
  else{
    setMovie(response);
  }
}

function App() {
  const [keyword, setKeyword] = useState("");
  const [movie, setMovie] = useState({});

 const callAPI = () => {
    const url = `http://www.omdbapi.com/?apikey=4926c71a&t=${keyword}`;
    fetch(url, {})
        .then(res => res.json())
        .then((data) => {setApiResponseToMovie(data, setMovie)})
        .catch(console.log)
  };

  return (
    <div>
      <button type="submit" onClick={callAPI}>Search</button>
      <SearchBar keyword={keyword} setKeyword={setKeyword}/>
      {!objectIsEmpty(movie) && <Movie attr={movie}/>}
    </div>
  );


}

export default App;
