import React, {useState} from 'react';

const APIMock = ['Dog', 'Cat', 'Bird']

const searchParams = () => {
    const [location, setLocation] = useState('Seattle, WA'); // set default as Seattle, WA
    const [animal, setAnimal] = useState('dog');

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
                <label htmlFor='animal'>
                    Animal
                    <select id="animal" 
                    value={animal} 
                    onChange={e => setAnimal(e.target.value)}
                    onBlur={e => setAnimal(e.target.value)}>
                        {APIMock.map(animal => <option value={animal}>{animal}</option>)}
                    </select>
                </label>

            </form>
        </div>

    );
}

export default searchParams;