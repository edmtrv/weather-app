import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LocationSearch from './LocationSearch';

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

  return (
    <div className="ui fluid container">
      <div className="ui segment">
        <LocationSearch onSearchLocation={onSearchLocation} />
        {weatherData ? weatherData.weather[0].description : null}
      </div>
    </div>
  );
};

export default App;
