import React from 'react';

const Movie = ({attr}) => {
    return (
        <div className="card">
            <h2> {attr.name} </h2>
            <h2> {attr.minuteLength} </h2>
            <h2> {attr.budgetInMillion} </h2>
            <h2> {attr.revenueInMillion} </h2>
            <h2> {attr.awardCount} </h2>
        </div>
    );
}

export default Movie;