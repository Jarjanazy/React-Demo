import {VStack, Text, Image, HStack, StackDivider} from '@chakra-ui/react'

const Movie = ({attr}) =>{
    if (attr.Response === "False"){
        return <Text fontSize="3xl"> No Such Movie</Text>
    }
    else return (
        <VStack 
        divider={<StackDivider/>} 
        borderColor="blue.100" 
        borderRadius="lg"
        borderWidth="5px"
        margin="2px">
            
            <HStack> 
                <Text fontSize="3xl">Title </Text> 
                <Text fontSize="3xl">: {attr.Title}</Text>
            </HStack>
            
            <Text fontSize="3xl">Year : {attr.Year}</Text>
            
            <Text fontSize="3xl">Actors : {attr.Actors}</Text>
            
            <Text fontSize="3xl">Genre : {attr.Genre}</Text>
            
            <Image  src={attr.Poster}/>
        </VStack>

    );
};

export default Movie;