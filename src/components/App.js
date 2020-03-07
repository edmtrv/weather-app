import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LocationSearch from './LocationSearch';
import LocationData from './LocationData';
import UnitToggle from './UnitToggle';

const API_KEY = process.env.REACT_APP_API_KEY;

const App = () => {
  const [location, setLocation] = useState('');
  const [metric, setMetric] = useState(true);
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    if (location) {
      (async location => {
        const response = await axios.get(
          `http://api.weatherstack.com/current?access_key=${API_KEY}&query=${location}&units=${
            metric ? 'm' : 'f'
          }`
        );
        setWeatherData(response.data);
      })(location);
    }
  }, [location, metric]);

  const onSearchLocation = term => setLocation(term);

  const onUnitToggle = () => setMetric(!metric);

  const showContent = () => {
    if (!location) {
      return <h2>Search for a location to get weather data.</h2>;
    }

    return <LocationData data={weatherData} metric={metric} />;
  };

  return (
    <div className="ui container">
      <div className="ui menu">
        <div className="header item">WeatherApp</div>
        <div className="item">
          <LocationSearch onSearchLocation={onSearchLocation} />
        </div>
        <div className="right item">
          <UnitToggle onToggle={onUnitToggle} metric={metric} />
        </div>
      </div>
      <div className="ui center aligned segment">{showContent()}</div>
    </div>
  );
};

export default App;
