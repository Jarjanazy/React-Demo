import React from 'react';

const Movie = ({attr}) => {
    return (
        <div className="card">
            <h2> {attr.name} </h2>
            <h2> {attr.runtimeInMinutes} </h2>
            <h2> {attr.budgetInMillions} </h2>
            <h2> {attr.boxOfficeRevenueInMillions} </h2>
            <h2> {attr.academyAwardNominations} </h2>
        </div>
    );
}

export default Movie;