import './App.css';
import Stack from './domain/Stack'
import { VStack, HStack, Button} from '@chakra-ui/react'
import {useReducer} from 'react'

const ACTIONS = {
  ADD_BLOCK : "add_block"
}

const reduce = (oldState, action) => {
  if (action.type === ACTIONS.ADD_BLOCK){
    return {blockCount : oldState.blockCount + 1};
  }
  else throw new Error();
}

function App() {
  const [state, dispatch] = useReducer(reduce, {blockCount : 0});

  return (
  <VStack>
    <HStack spacing="50px">
        <Stack state={state}/>
        <Button colorScheme="teal" size="lg" 
          onClick={() => dispatch({type: ACTIONS.ADD_BLOCK})}> Add new block 
        </Button>
    </HStack>
  </VStack>
  );
}

export default App;
