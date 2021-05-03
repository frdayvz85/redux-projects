import React, { useState, useEffect } from 'react';
import { usePosition } from 'use-position';
import WeatherDaily from './components/WeatherDaily';
import "./App.css"

const App = () => {

  const [weather, setWeather] = useState();
  const { latitude, longitude } = usePosition();

  useEffect(() => {
    latitude && longitude && getWeatherData(latitude, longitude);
  }, [latitude, longitude])


  const getWeatherData = async (lat, lon) => {
    const myAPI = process.env.REACT_APP_WEATHER_API_KEY;
    const lang = navigator.language.split('-')[0];

    try {
      const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${myAPI}&lang=${lang}&units=metric`);
      const result = await data.json();
      setWeather(result);

      console.log(result)
    } catch {
      alert('Veri alınırken hata oluştu.')
    }
  }

  return (
    <div>
      <h1 className="project-title">React weather with API and location</h1>
      <WeatherDaily weather={weather} />
    </div>
  )
}

export default App
