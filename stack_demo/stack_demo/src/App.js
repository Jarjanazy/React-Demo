import './App.css';
import Stack from './domain/Stack'
import { VStack, HStack, Button} from '@chakra-ui/react'

function App() {
  return (
  <VStack>
    <HStack spacing="50px">
        <Stack/>
        <Button colorScheme="teal" size="lg"> Add new block </Button>
    </HStack>
</VStack>
  );
}

export default App;
