import { useEffect, useState } from "react";


function useFetch<T>(url: string) {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error('Error response was not ok');
                }

                const data = await response.json();
                setData(data);
            } catch (err) {
                setError(err as Error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [url]);
    return { data, loading, error };
}

export default useFetch;