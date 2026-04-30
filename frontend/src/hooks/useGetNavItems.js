import { useEffect, useState } from "react";
import axios from "axios";

export const useGetNavItems = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {

        const fetchNavItems = async () => {
            try {
                setLoading(true);

                const res = await axios.get("http://localhost:5000/api/nav/items");

                console.log("API RESPONSE:", res.data);

                setData(res.data);

            } catch (err) {
                console.error(err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchNavItems();

    }, []);

    return { data, loading, error };
};