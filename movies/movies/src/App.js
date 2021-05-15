import './App.css';
import {useReducer} from 'react';
import SearchBar from './application/SearchBar';
import Movie from './domain/Movie';
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

      {!objectIsEmpty(state) && <Movie movie={state.movie}/>}
      
    </VStack>
  );
}

export default App;
