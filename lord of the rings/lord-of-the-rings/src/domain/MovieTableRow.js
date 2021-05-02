import React from 'react';

const MovieRow = ({attr}) => {
    return (
        <tr>
            <td> {attr.name} </td>
            <td> {attr.runtimeInMinutes}</td>
            <td> {attr.budgetInMillions} </td>
            <td> {attr.boxOfficeRevenueInMillions}</td>
            <td> {attr.academyAwardNominations}</td>
        </tr>
    );
}

export default MovieRow;