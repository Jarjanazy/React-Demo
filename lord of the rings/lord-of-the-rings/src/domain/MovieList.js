import React from 'react';
import Movie from './Movie'


const firstMovie = {
    awardCount : 2,
    revenueInMillion : 3,
    budgetInMillion : 4,
    minuteLength : 5,
    name : "test name"
}

const MovieList = () => {
    return (
        <div>
            <Movie attr={firstMovie}/>
        </div>
    );
}

export default MovieList;