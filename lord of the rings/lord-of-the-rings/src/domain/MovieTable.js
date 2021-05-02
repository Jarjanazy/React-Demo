import React, { useEffect, useState } from 'react';
import MovieRow from './MovieTableRow'


const MovieTable = () => {
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
    }, []);

    return (

        <table id="movieTable" class="table table-striped table-bordered">
            <thead>
            <tr>
                <th>Movie Name</th>
                <th>Length In Minutes</th>
                <th>Budget In Million</th>
                <th>BoxOffice Revenues In Millions</th>
                <th>Number of Award Nominations</th>
            </tr>
            </thead>
            <tbody>
                {movies.map(m => <MovieRow attr={m}/>)}
            </tbody>
        </table>

    );
}

export default MovieTable;