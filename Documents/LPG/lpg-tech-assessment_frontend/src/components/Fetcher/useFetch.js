import { useState, useEffect } from "react";

export default function useFetch(url) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [data, setData] = useState([]);

    async function asyncFetchAPI() {
        setLoading(true)
        fetch(url, {method: "GET"})
            .then(response => response.json())
            .then(data => setData(data))
            .then(loading => setLoading(false))
            .catch((error) => {
                 console.log('error: ' + error)
                 setError(true)
                 setLoading(false)
            })
    }

    useEffect(() => {
        asyncFetchAPI();
    }, []);

    return [data, loading, error];
}