import styles from './App.module.css';
import Alert from './components/Form/Alert';
import Form from './components/Form/Form';
import Spinner from './components/Spinner/Spinner';
import WeatherDetails from './components/WeatherDetails/WeatherDetails';
import useWeather from './hooks/useWeather';

function App() {
  const { weather, fetchWeather, hasWeatherData, loading, notFound } =
    useWeather();
  return (
    <>
      <h1 className={styles.title}>Buscador de Clima</h1>
      <div className={styles.container}>
        <Form fetchWeather={fetchWeather} />
        {loading && <Spinner />}
        {hasWeatherData && <WeatherDetails weather={weather} />}
        {notFound && <Alert>Ciudad no encontrada</Alert>}
      </div>
    </>
  );
}

export default App;
