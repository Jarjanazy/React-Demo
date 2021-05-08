import {VStack, Text, Image, HStack, StackDivider} from '@chakra-ui/react'

const Movie = ({attr}) =>{
    if (attr.Response === "False"){
        return <h2> No Such Movie</h2>
    }
    else return (
        <VStack divider={<StackDivider/>} borderColor="green.100">
            
            <HStack> 
                <Text fontSize="4xl">Title </Text> 
                <Text fontSize="4xl">: {attr.Title}</Text>
            </HStack>
            
            <Text fontSize="4xl">Year : {attr.Year}</Text>
            
            <Text fontSize="4xl">Actors : {attr.Actors}</Text>
            
            <Text fontSize="4xl">Genre : {attr.Genre}</Text>
            
            <Image  src={attr.Poster}/>
        </VStack>

    );
};

export default Movie;