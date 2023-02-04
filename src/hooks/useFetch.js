import { useEffect, useState } from 'react';

/**
 * Function to fetch from the API with useEffect incorporated.
 * @param {string} API - The URL from where to fetch the data.
 */

export default function useFetch(API) {
    const [data, setData] = useState();

    useEffect(() => {
        fetchData(API);
        async function fetchData(API) {
            const response = await fetch(API);
            const responseJSON = await response.json();
            setData(responseJSON);
        };
    }, []);
    return data;
}


