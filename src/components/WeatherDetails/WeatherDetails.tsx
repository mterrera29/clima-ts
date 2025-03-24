import { formatTemperature } from '../../helpers';
import { Weather } from '../../hooks/useWeather';
import styles from './WeatherDetails.module.css';

type WeatherDetailsProps = {
  weather: Weather;
};

export default function WeatherDetails({ weather }: WeatherDetailsProps) {
  return (
    <div className={styles.container}>
      <h2>Clima de: {weather.name}</h2>
      <p className={styles.current}>{formatTemperature(weather.main.temp)}°C</p>
      <div className={styles.temperatures}>
        <p>
          Min: <span>{formatTemperature(weather.main.temp_min)}°C</span>
        </p>
        <p>
          Max: <span>{formatTemperature(weather.main.temp_max)}°C</span>
        </p>
      </div>
    </div>
  );
}
