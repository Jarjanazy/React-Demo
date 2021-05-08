import './App.css';
import {useState} from 'react';
import SearchBar from './application/SearchBar';
import Movie from './domain/Movie';
import {Heading, VStack } from '@chakra-ui/react'

const objectIsEmpty = (obj) => {
  return obj && Object.keys(obj).length === 0 && obj.constructor === Object;
}

const setApiResponseToMovie = (response, setMovie) => {
  console.log(response);
    setMovie(response);
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
    <VStack>
      <Heading >Welcome To The Movie Finder</Heading >
      <SearchBar keyword={keyword} setKeyword={setKeyword} callAPI={callAPI}/>
      {!objectIsEmpty(movie) && <Movie attr={movie}/>}
    </VStack>
  );


}

export default App;
