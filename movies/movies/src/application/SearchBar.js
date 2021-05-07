const SearchBar = ({keyword, setKeyword, callAPI}) => {
    return (
        <div className="text-center">
            <button type="submit" onClick={callAPI}>Search</button>
            <input placeholder="Search a movie" value={keyword} onChange={(e) => setKeyword(e.target.value)}/>
        </div>
        );
}

export default SearchBar;