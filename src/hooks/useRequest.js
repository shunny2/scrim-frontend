import { useEffect, useState } from 'react';

import api from '../services/api';

export function useRequest(url, options) {
    const [data, setData] = useState([]);
    const [isFetching, setIsFetching] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        api.get(url, options)
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                setError(error);
            })
            .finally(() => {
                setIsFetching(false);
            })
    }, [url, options]);

    return { data, error, isFetching };
}