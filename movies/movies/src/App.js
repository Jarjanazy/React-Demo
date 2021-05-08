import './App.css';
import {useState} from 'react';
import SearchBar from './application/SearchBar';
import Movie from './domain/Movie';
import {Heading, VStack} from '@chakra-ui/react'
import ModeToggleButton from './application/ModeToggleButton'

const objectIsEmpty = (obj) => {
  return obj && Object.keys(obj).length === 0 && obj.constructor === Object;
}

function App() {
  const [keyword, setKeyword] = useState("", []);
  const [movie, setMovie] = useState({});

  return (
    <VStack p={4} spacing={4}>
      <ModeToggleButton/>

      <Heading size="2xl" >Welcome To The Movie Finder</Heading >

      <SearchBar keyword={keyword} setKeyword={setKeyword} setMovie={setMovie}/>

      {!objectIsEmpty(movie) && <Movie attr={movie}/>}
      
    </VStack>
  );
}

export default App;
