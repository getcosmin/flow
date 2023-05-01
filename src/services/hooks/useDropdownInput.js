import { useState } from 'react';

export default function useGetDropdownValue() {
    const [hasDropdownActive, setDropdownActive] = useState(false);
    const [dropdownValue, setDropdownValue] = useState('');

    function toggleDropdown() {
        hasDropdownActive ? setDropdownActive(false) : setDropdownActive(true);
    }

    function getDropdownValue(event) {
        const targetValue = event.target.innerText;
        setDropdownValue(targetValue);
        setDropdownActive(false);
    }

    return {
        dropdownValue: dropdownValue,
        getDropdownValue: getDropdownValue,
        toggleDropdown: toggleDropdown,
        hasDropdownActive: hasDropdownActive,
    };
}