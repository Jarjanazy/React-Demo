import './App.css';
import Stack from './domain/Stack'
import { VStack, HStack, Button} from '@chakra-ui/react'
import {useReducer} from 'react'

const ACTIONS = {
  ADD_BLOCK : "add_block",
  REMOVE_LAST_BLOCK : "remove_last_block"
}

const reduce = (currentState, action) => {
  if (action.type === ACTIONS.ADD_BLOCK)
    return {blockCount : currentState.blockCount + 1};
  
  else if (action.type === ACTIONS.REMOVE_LAST_BLOCK){
    if (currentState.blockCount === 0) 
      return currentState;
    else 
      return {blockCount : currentState.blockCount - 1};
  }
  
  else throw new Error();
}

// whenever we call the dispatch function with an object
// the reduce function is called with the first parameter as our current state
// and the second parameter as teh object we gave to the dispatch function
// the reduce function will return the new updated state

const addNewBlock = (dispatch) => {
  dispatch({type: ACTIONS.ADD_BLOCK});
}

const removeLastBlock = (dispatch, payload) => {
  dispatch({type : ACTIONS.REMOVE_LAST_BLOCK});
}

function App() {
  const [state, dispatch] = useReducer(reduce, {blockCount : 0});

  return (
  <VStack>
    <HStack spacing="50px">
    <   Button colorScheme="red" size="lg" onClick={() => removeLastBlock(dispatch)}> Remove last block </Button>
        <Stack state={state}/>
        <Button colorScheme="teal" size="lg" onClick={() => addNewBlock(dispatch)}> Add new block </Button>
    </HStack>
  </VStack>
  );
}

export default App;
