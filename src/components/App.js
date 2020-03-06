import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LocationSearch from './LocationSearch';
import LocationData from './LocationData';

const API_KEY = process.env.REACT_APP_API_KEY;

const App = () => {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    if (location) {
      (async location => {
        const response = await axios.get(
          `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`
        );
        setWeatherData(response.data);
      })(location);
    }
  }, [location]);

  const onSearchLocation = term => {
    setLocation(term);
  };

  const showContent = () => {
    if (!location) {
      return <h2>Search for a location to get weather data.</h2>;
    }

    return <LocationData data={weatherData} />;
  };

  return (
    <div className="ui container">
      <div className="ui menu">
        <div className="header item">WeatherApp</div>
        <div className="item">
          <LocationSearch onSearchLocation={onSearchLocation} />
        </div>
      </div>
      <div className="ui segment">{showContent()}</div>
    </div>
  );
};

export default App;
