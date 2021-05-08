import {HStack, Button, Input} from '@chakra-ui/react'


const setApiResponseToMovie = (response, setMovie) => {
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

const SearchBar = ({keyword, setKeyword, setMovie}) => {
    return (
        <HStack>
            <Button type="submit" onClick={() => callAPI(keyword, setMovie)}>Search</Button>
            <Input placeholder="Search a movie" value={keyword} onChange={(e) => setKeyword(e.target.value)}/>
        </HStack>
        );
}

export default SearchBar;