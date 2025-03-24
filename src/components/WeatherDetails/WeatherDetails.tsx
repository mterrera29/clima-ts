import { Weather } from '../../hooks/useWeather';

type WeatherDetailsProps = {
  weather: Weather;
};

export default function WeatherDetails({ weather }: WeatherDetailsProps) {
  return <div>{weather.name} </div>;
}
