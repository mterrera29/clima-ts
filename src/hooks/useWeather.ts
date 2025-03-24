import { useState } from 'react';
import { SearchType } from '../types';
import { z } from 'zod';

const Weather = z.object({
  name: z.string(),
  main: z.object({
    temp: z.number(),
    temp_max: z.number(),
    temp_min: z.number(),
  }),
});

export type Weather = z.infer<typeof Weather>;

export default function useWeather() {
  const [weather, setWeather] = useState<Weather>({
    name: '',
    main: {
      temp: 0,
      temp_max: 0,
      temp_min: 0,
    },
  });
  const fetchWeather = async (search: SearchType) => {
    const API_KEY = import.meta.env.VITE_API_KEY;
    try {
      const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${search.city},${search.country}&appid=${API_KEY}`;
      fetch(geoUrl)
        .then(async (res) => {
          if (!res.ok) throw new Error('Error en la peticion');
          return await res.json();
        })
        .then((res) => {
          const lat = res[0].lat;
          const lon = res[0].lon;
          const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
          fetch(weatherURL)
            .then(async (res) => {
              if (!res.ok) {
                throw new Error('No se lee la url');
              }
              return await res.json();
            })
            .then((res) => {
              const weatherResult = res;
              const result = Weather.safeParse(weatherResult);
              if (result.success) {
                setWeather(result.data);
              }
            })
            .catch((err) => console.error(err));
        })
        .catch((err) => console.error(err));
    } catch (error) {
      console.log(error);
    }
  };
  return { weather, fetchWeather };
}
