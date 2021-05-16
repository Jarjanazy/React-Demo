import Movie from './Movie'

const MovieList = ({state}) => {
    return (
        <>
        {state.movies.map(movie =>  <Movie movie={movie}/>)}
        </>
    );
}

export default MovieList;