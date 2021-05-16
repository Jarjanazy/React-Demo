import {HStack, Button, Input, VStack, Text} from '@chakra-ui/react'
import {useRef} from 'react';



const getMovieUsingKeyword = async (keyword) => {
  if (keyword === "") return;

   const url = `https://www.omdbapi.com/?apikey=4926c71a&t=${keyword}`;
   const reponse  = await fetch(url, {}).catch(console.log);
   return reponse.json();
 };

 const searchAndSetMovie = async (keywordRef, dispatch) => {
     const keyword = keywordRef.current.value;
     if (keyword === "") return;
    const movie = await getMovieUsingKeyword(keyword);
    dispatch({type:"show_searched_movies", movies:[movie]});
 }

 const getRandomMovies = (movieCount) => {
     const randomWords = ['go', 'man', 'woman'];
     return randomWords.map( (movieKeyword) => {
        return getMovieUsingKeyword(movieKeyword);
     });
 }

const getAndSetRandomMovies = async (randomMovieCountRef, dispatch) => {
    const count = randomMovieCountRef.current.value;
    if (count === "") return;

    const movies = await Promise.all( getRandomMovies(count));
    console.log(movies)
    dispatch({type : "show_searched_movies", movies : movies});
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
                <Button type="submit" onClick={() => getAndSetRandomMovies(randomMovieCountRef, dispatch)}>Show Me</Button>
                <Input placeholder="X" w="15%" ref={randomMovieCountRef}/>
                <Text>Random movies!</Text>
            </HStack>

        </VStack>
        
        );
}

export default SearchBar;