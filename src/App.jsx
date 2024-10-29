import React, { useState } from 'react';
import '../src/styles/style.css';
import WeatherForm from './component/WeatherForm';
import DressRecommendation from './component/DressRecommendation';

const App = () => {
  const [weather, setWeather] = useState(null);

  const handleWeatherData = (data) => {
    setWeather(data);
  };

  return (
    <div className="App">
      <h1>Dress for the Weather</h1>
      <WeatherForm onFetchWeather={handleWeatherData} />
      {weather && <DressRecommendation weather={weather} />}
    </div>
  );
};

export default App;
