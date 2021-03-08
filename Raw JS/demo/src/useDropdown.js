import React, {useState} from 'react';

const useDropdown = (label, defaultState, options) => {
    const [state, setState] = useState(defaultState);
    const id = `use-dropdown-${label.replace(" ", "").toLowerCase()}`;
    const dropDown = () => {
        return <label htmlFor={label}>
            {label}
            <select id={id} value={state} 
            onChange={e => e.target.value} 
            onBlur={e => e.target.value} disabled={options.length === 0}>
                {options.map(option => <option value={option}> {option} </option>) }
            </select>
        </label>
    }
    return [state, dropDown, setState];
};

export default useDropdown;