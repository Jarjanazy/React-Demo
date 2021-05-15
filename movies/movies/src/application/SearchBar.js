import {HStack, Button, Input, VStack, Text} from '@chakra-ui/react'
import {useRef} from 'react';



const getMovieUsingKeyword = async (keyword) => {
  if (keyword === "") return;

   const url = `https://www.omdbapi.com/?apikey=4926c71a&t=${keyword}`;
   const reponse  = await fetch(url, {}).catch(console.log);
   return reponse.json();
 };

 const searchAndSetMovie = (keywordRef, dispatch) => {
     const keyword = keywordRef.current.value;
     if (keyword === "") return;

    else getMovieUsingKeyword(keyword).
        then(movie => dispatch({type:"search_movie", movie:movie}));
 }


const SearchBar = ({dispatch}) => {
    const keywordRef = useRef(null);
    const randomMovieCountRef = useRef(null);
    
    return (
        <VStack>
            <HStack>
                <Button type="submit" onClick={() => searchAndSetMovie(keywordRef, dispatch)}>Search</Button>
                <Input placeholder="Search a movie" ref={keywordRef}/>
            </HStack>

            <HStack>
                <Button type="submit">Show Me</Button>
                <Input placeholder="X" w="15%" ref={randomMovieCountRef}/>
                <Text>Random movies!</Text>
            </HStack>

        </VStack>
        
        );
}

export default SearchBar;