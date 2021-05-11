import {HStack, Button, Input} from '@chakra-ui/react'
import {useRef} from 'react';


const setApiResponseToMovie = (response, setMovie) => {
    console.log(response);
    setMovie(response);
}

const callAPI = (keyword, setMovie) => {
  if (keyword === "") return;

   const url = `https://www.omdbapi.com/?apikey=4926c71a&t=${keyword}`;
   fetch(url, {})
       .then(res => res.json())
       .then((data) => {setApiResponseToMovie(data, setMovie)})
       .catch(console.log)
 };



const SearchBar = ({setMovie}) => {
    const keywordRef = useRef(null);
    
    return (
        <HStack>
            <Button type="submit" onClick={() => callAPI(keywordRef.current.value, setMovie)}>Search</Button>
            <Input placeholder="Search a movie" ref={keywordRef}/>
        </HStack>
        );
}

export default SearchBar;