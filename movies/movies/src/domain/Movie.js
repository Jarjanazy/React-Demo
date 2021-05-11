import {VStack, Text, Image, HStack, StackDivider, Box} from '@chakra-ui/react'
import UnOrderedListFromString from '../application/UnOrderedList'

const Movie = ({attr}) =>{
    if (attr.Response === "False"){
        return <Text fontSize="3xl"> No Such Movie</Text>
    }
    else return (
        <HStack 
        divider={<StackDivider/>} 
        borderColor="blue.100" 
        borderRadius="lg"
        borderWidth="5px"
        margin="2px">
            <VStack>
                <Text fontSize="3xl">Title: {attr.Title} </Text> 
                
                <Text fontSize="3xl">Year : {attr.Year}</Text>
                
                <UnOrderedListFromString title={'Actors'} listAsString={attr.Actors}/>
                
                <UnOrderedListFromString title={'Genre'} listAsString={attr.Genre}></UnOrderedListFromString>
            </VStack>
             <Image  src={attr.Poster}  boxSize="500px"/>

        </HStack>

    );
};

export default Movie;