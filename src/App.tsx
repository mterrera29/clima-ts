import styles from './App.module.css';
import Form from './components/Form/Form';
import WeatherDetails from './components/WeatherDetails/WeatherDetails';
import useWeather from './hooks/useWeather';

function App() {
  const { weather, fetchWeather } = useWeather();
  return (
    <>
      <h1 className={styles.title}>Buscador de Clima</h1>
      <div className={styles.container}>
        <Form fetchWeather={fetchWeather} />
        <WeatherDetails weather={weather} />
      </div>
    </>
  );
}

export default App;
