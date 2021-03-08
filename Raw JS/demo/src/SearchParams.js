import React, {useState} from 'react';
import useDropdown from './useDropdown'

const APIMock = ['Dog', 'Cat', 'Bird']

const searchParams = () => {
    const [location, setLocation] = useState('Seattle, WA'); // set default as Seattle, WA
    const [animal, AnimalDrodown] = useDropdown('Animal', APIMock[0], APIMock);

    return (
        // when we try to edit the input field we notice that it doesn't change
        // it's because on every event on the DOM React kicks off a re-render cycle on its components
        // and on reload the value of the input field is Seattle, WA when the App componenet is re-rendered
        <div className="search-params"> 
            <h1>This is also changed {location} </h1>
            <form>
                <label htmlFor="location">
                    Location
                    <input id="location" value={location} placeholder="Location" onChange={(e) => setLocation(e.target.value)}/>
                    <button> Submit</button>
                </label>
                <AnimalDrodown />

            </form>
        </div>

    );
}

export default searchParams;