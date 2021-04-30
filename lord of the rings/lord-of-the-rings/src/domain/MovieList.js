import React, { useEffect, useState } from 'react';
import Movie from './Movie'


const MovieList = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('https://the-one-api.dev/v2/movie', {
            headers: {
                'Authorization': 'Bearer b8pAHjjXVh68hZO83wlq',
              }
        })
        .then(res => res.json())
        .then((data) => {setMovies(data.docs)})
        .catch(console.log)
    });

    return (
        <div>
            {movies.map(m => {
                return (
                    <div>
                        <Movie attr={m}/>
                    </div>
                    )
                })}
        </div>
    );
}

export default MovieList;