const SearchBar = ({keyword, setKeyword}) => {
    return (
        <input placeholder="Search a movie" value={keyword} onChange={(e) => setKeyword(e.target.value)}/>
        );
}

export default SearchBar;