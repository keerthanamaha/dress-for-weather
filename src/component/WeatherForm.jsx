import React, { useState } from 'react';
import axios from 'axios';

const WeatherForm = ({ onFetchWeather }) => {
  const [city, setCity] = useState('');

  const fetchWeather = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_WEATHER_API_KEY}&units=metric`
      );
      console.log('Weather data response:', response.data);
      onFetchWeather(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
      alert('City not found');
    }
  };

  return (
    <form onSubmit={fetchWeather}>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button type="submit">Get Weather</button>
    </form>
  );
};

export default WeatherForm;
