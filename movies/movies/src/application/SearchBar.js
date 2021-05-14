import {HStack, Button, Input, VStack, Text} from '@chakra-ui/react'
import {useRef} from 'react';


const setApiResponseToMovie = (response, setMovie) => {
    console.log(response);
    setMovie(response);
}

const callAPI = (keyword, dispatch) => {
  if (keyword === "") return;

   const url = `https://www.omdbapi.com/?apikey=4926c71a&t=${keyword}`;
   fetch(url, {})
       .then(res => res.json())
       .then((data) => {dispatch({type:"search_movie", movie:data})})
       .catch(console.log)
 };



const SearchBar = ({dispatch}) => {
    const keywordRef = useRef(null);
    const randomMovieCountRef = useRef(null);
    
    return (
        <VStack>
            <HStack>
                <Button type="submit" onClick={() => callAPI(keywordRef.current.value, dispatch)}>Search</Button>
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