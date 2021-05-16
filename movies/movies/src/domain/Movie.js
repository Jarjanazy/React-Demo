import {VStack, Text, Image, HStack, StackDivider} from '@chakra-ui/react'
import UnOrderedListFromString from '../application/UnOrderedList'

const Movie = ({movie}) =>{
    if (movie.Response === "False"){
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
                <Text fontSize="3xl">Title: {movie.Title} </Text> 
                
                <Text fontSize="3xl">Year : {movie.Year}</Text>
                
                <UnOrderedListFromString title={'Actors'} listAsString={movie.Actors}/>
                
                <UnOrderedListFromString title={'Genre'} listAsString={movie.Genre}></UnOrderedListFromString>
            </VStack>
             <Image  src={movie.Poster}  boxSize="500px"/>

        </HStack>

    );
};

export default Movie;