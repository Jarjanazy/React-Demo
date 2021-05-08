import './App.css';
import {useState} from 'react';
import SearchBar from './application/SearchBar';
import Movie from './domain/Movie';
import {Heading, VStack, IconButton, useColorMode} from '@chakra-ui/react'
import { FaSun, FaMoon } from 'react-icons/fa';

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
  const {colorMode, toggleColorMode} = useColorMode();

 const callAPI = () => {
   if (keyword === "") return;

    const url = `http://www.omdbapi.com/?apikey=4926c71a&t=${keyword}`;
    fetch(url, {})
        .then(res => res.json())
        .then((data) => {setApiResponseToMovie(data, setMovie)})
        .catch(console.log)
  };

  return (
    <VStack p={4} spacing={4}>
      <IconButton 
        icon={<FaSun/>} 
        isRound={true} 
        size="lg" 
        alignSelf="flex-end"
        onClick={toggleColorMode}
      />

      <Heading size="2xl" >Welcome To The Movie Finder</Heading >

      <SearchBar keyword={keyword} setKeyword={setKeyword} callAPI={callAPI}/>

      {!objectIsEmpty(movie) && <Movie attr={movie}/>}
      
    </VStack>
  );


}

export default App;
