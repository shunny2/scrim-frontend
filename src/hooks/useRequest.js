import React, { useEffect, useState } from 'react';

export function useRequest(url) {
    useEffect(() => {
        api.get()
            .then((response) => {
                setGames(response.data);
            })
            .catch((error) => {
                console.log(error.message);
            })
    }, []);
}