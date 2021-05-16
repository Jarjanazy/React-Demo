import './App.css';
import {useReducer} from 'react';
import SearchBar from './application/SearchBar';
import MovieList from './domain/MovieList';
import reduce from './domain/Reducer'
import {Heading, VStack} from '@chakra-ui/react'
import ModeToggleButton from './application/ModeToggleButton'

const objectIsEmpty = (obj) => {
  return obj && Object.keys(obj).length === 0 && obj.constructor === Object;
}


function App() {
  const [state, dispatch] = useReducer(reduce, {})

  return (
    <VStack p={4} spacing={4}>
      <ModeToggleButton/>

      <Heading size="2xl" >Welcome To The Movie Finder</Heading >

      <SearchBar dispatch={dispatch}/>

      {!objectIsEmpty(state) && <MovieList state={state}/>}
      
    </VStack>
  );
}

export default App;
