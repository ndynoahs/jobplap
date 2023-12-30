import { useState, useEffect } from "react";
import axios from "axios";
// import { RAPID_API_KEY } from '@env'
// const rapidApiKey = RAPID_API_KEY;

const useFetch = (endpoint, query) => {
    const [ data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    // const rapidApiKey = process.env.RAPID_API_KEY
    
    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        params: {
            ...query
        },
        headers: {
          'X-RapidAPI-Key': '843545256dmshccc680579505eb6p14ab67jsnb09a063ff767',
          'X-Rap idAPI-Host': 'jsearch.p.rapidapi.com'
        }
      };

    const fetchData = async () => {
        setIsLoading(true);

        try {
            const response = await axios.request(options);
            setData(response.data.data);
            setIsLoading(true)

            console.log(response);
        } catch (error) {
            setError(error);
            alert('There is an error')
            console.error(error);
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const refresh = () => {
        setIsLoading(true);
        fetchData();
    }
       return {data, isLoading, error, refresh} 
}

 export default useFetch;