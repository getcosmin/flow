import { useState } from 'react';

export default function useToggleState() {
    const [componentState, setComponentState] = useState(false);

    function toggleComponentState() {
        componentState ? setComponentState(false) : setComponentState(true);
    }

    return {
        componentState: componentState,
        toggleComponentState: toggleComponentState,
    };
}
