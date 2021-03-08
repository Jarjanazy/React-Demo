import React, {useState} from 'react';

// this represents a custom Hook or we can say Component
const useDropdown = (label, defaultState, options) => {
    const [state, setState] = useState(defaultState);
    const id = `use-dropdown-${label.replace(" ", "").toLowerCase()}`;
    const dropDown = () => {
        return <label htmlFor={label}>
            {label}
            <select id={id} value={state} 
            onChange={e => e.target.value} 
            onBlur={e => e.target.value} disabled={options.length === 0}>
                {options.map(option => <option key={option} value={option}> {option} </option>) }
            </select>
        </label>
    }
    return [state, dropDown, setState];
};

export default useDropdown;