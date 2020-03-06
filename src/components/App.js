import React, { useState } from 'react';
import LocationSearch from './LocationSearch';

const App = () => {
  const [location, setLocation] = useState('');

  const onSearchLocation = term => {
    setLocation(term);
  };

  return (
    <div className="ui fluid container">
      <div className="ui segment">
        <LocationSearch onSearchLocation={onSearchLocation} />
        {location}
      </div>
    </div>
  );
};

export default App;
