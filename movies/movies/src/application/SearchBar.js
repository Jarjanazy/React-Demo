import {HStack, Button, Input} from '@chakra-ui/react'


const SearchBar = ({keyword, setKeyword, callAPI}) => {
    return (
        <HStack>
            <Button type="submit" onClick={callAPI}>Search</Button>
            <Input placeholder="Search a movie" value={keyword} onChange={(e) => setKeyword(e.target.value)}/>
        </HStack>
        );
}

export default SearchBar;