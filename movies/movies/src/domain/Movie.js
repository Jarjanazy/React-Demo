const Movie = ({attr}) =>{
    if (attr.Response === "False"){
        return <h2> No Such Movie</h2>
    }
    else return (
        <div className="container">
            <div className="row">
                <h2>Title : {attr.Title}</h2>
                <h2>Year : {attr.Year}</h2>
                <h2>Actors : {attr.Actors}</h2>
                <h2>Genre : {attr.Genre}</h2>
                <img src={attr.Poster}/>
            </div>
        </div>
    );
};

export default Movie;