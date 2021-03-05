import React, {useState} from 'react';

const searchParams = () => {
    const [location, setLocation] = useState('Seattle, WA');

    return (
        // when we try to edit the input field we notice that it doesn't change
        // it's because on every event on the DOM React kicks off a re-render cycle on its components
        // and on reload the value of the input field is Seattle, WA when the App componenet is re-rendered
        <div className="search-params"> 
            <form>
                <label htmlFor="location">
                    Location
                    <input id="location" value={location} placeholder="Location" onChange={(e) => setLocation(e.target.value)}/>
                    <button> Submit</button>
                </label>
            </form>
        </div>

    );
}

export default searchParams;