import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud, faWind, faTint, faMapMarkerAlt, faThermometerHalf } from '@fortawesome/free-solid-svg-icons';

const DressRecommendation = ({ weather }) => {
  const temperature = weather.main.temp;
  const humidity = weather.main.humidity;
  const windSpeed = weather.wind.speed;
  const weatherDescription = weather.weather[0].description;

  const getDressRecommendation = () => {
    if (temperature < 10) {
      return 'It’s cold! Wear a warm coat, scarf, and gloves.';
    } else if (temperature >= 10 && temperature < 20) {
      return 'It’s cool. A jacket or sweater should be enough.';
    } else if (temperature >= 20 && temperature < 30) {
      return 'It’s warm. Wear light clothing.';
    } else {
      return 'It’s hot! Go with shorts and a T-shirt.';
    }
  };

  return (
    <div className="weather-info">
      <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
      <h2>{weather.name}</h2>
      <p><FontAwesomeIcon icon={faThermometerHalf} /> <strong>Temperature:</strong> {temperature}°C</p>
      <p><FontAwesomeIcon icon={faCloud} /> <strong>Weather:</strong> {weatherDescription.charAt(0).toUpperCase() + weatherDescription.slice(1)}</p>
      <p><FontAwesomeIcon icon={faTint} /> <strong>Humidity:</strong> {humidity}%</p>
      <p><FontAwesomeIcon icon={faWind} /> <strong>Wind Speed:</strong> {windSpeed} m/s</p>
      <p><strong>Dress Recommendation:</strong> {getDressRecommendation()}</p>
    </div>
  );
};

export default DressRecommendation;
