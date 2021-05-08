import {VStack, Text } from '@chakra-ui/react'

const Movie = ({attr}) =>{
    if (attr.Response === "False"){
        return <h2> No Such Movie</h2>
    }
    else return (
        <VStack>
            
            <Text fontSize="4xl">Title : {attr.Title}</Text >
            
            <Text fontSize="4xl">Year : {attr.Year}</Text>
            
            <Text fontSize="4xl">Actors : {attr.Actors}</Text>
            
            <Text fontSize="4xl">Genre : {attr.Genre}</Text>
            
            <img src={attr.Poster}/>
        </VStack>

    );
};

export default Movie;