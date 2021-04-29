import React, { useState } from 'react';
import Movie from './Movie'


const firstMovie = {
    awardCount : 2,
    revenueInMillion : 3,
    budgetInMillion : 4,
    minuteLength : 5,
    name : "test name"
}



const getMoviesFromAPI = (callbackFun) => {
    fetch('https://the-one-api.dev/v2/movie', {
        headers: {
            'Authorization': 'Bearer b8pAHjjXVh68hZO83wlq',
          }
    })
    .then(res => res.json())
    .then((data) => {
        console.log("HEEEEEY");
        callbackFun([data.docs[0]])
    })
    .catch(console.log)
}

const MovieList = () => {
    const [movies, setMovies] = useState([firstMovie]);

    return (
        <div>
            {movies.map(m => {
                return (
                    <div>
                        <Movie attr={m}/>
                    </div>
                    )
                })}

                <button onClick={() => getMoviesFromAPI(setMovies)}> refresh</button>
        </div>
    );
}

export default MovieList;