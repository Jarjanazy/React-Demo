import React from 'react';

const searchParams = () => {
    const location = 'Seattle, WA';

    return (
        // we use className instead of class, because in JS class is a reserved word
        // the same goes for htmlFor
        <div className="search-params"> 
            <form>
                <label htmlFor="location">
                    Location
                    <input id="location" value={location} placeholder="Location"/>
                    <button> Submit</button>
                </label>
            </form>
        </div>

    );
}

export default searchParams;