import React from 'react';

const Loader = () => {
  return (
    <div className="ui segment">
      <div className="ui active inverted dimmer">
        <div className="ui text loader">Loading weather data...</div>
      </div>
    </div>
  );
};

export default Loader;
