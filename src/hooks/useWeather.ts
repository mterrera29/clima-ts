import { useState } from 'react';
import { SearchType } from '../types';

export default function useWeather() {
  const [data, setData] = useState();
  const fetchWeather = async (search: SearchType) => {
    const API_KEY = '894d358ece9fd5fd6cf20e14c93d91d4';
    try {
      const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${search.city},${search.country}&appid=${API_KEY}`;
      fetch(geoUrl)
        .then(async (res) => {
          if (!res.ok) throw new Error('Error en la peticion');
          return await res.json();
        })
        .then((res) => setData(res))
        .catch((err) => console.error(err));
    } catch (error) {
      console.log(error);
    }
  };
  return { fetchWeather, data };
}
