const Movie = ({attr}) =>{
    if (attr.Response === "False"){
        return <h2> No Such Movie</h2>
    }
    else return (
        <div className="container">
            <div className="row">
                <h2 className="col-md-12">Title : {attr.Title}</h2>
                <h2 className="col-md-12">Year : {attr.Year}</h2>
                <h2 className="col-md-12">Actors : {attr.Actors}</h2>
                <h2 className="col-md-12">Genre : {attr.Genre}</h2>
                <img className="col-md-12" src={attr.Poster}/>
            </div>
        </div>
    );
};

export default Movie;