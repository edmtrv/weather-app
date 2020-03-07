import React from 'react';
import Loader from './Loader';

const LocationData = ({ data, metric }) => {
  if (!data) {
    return <Loader />;
  }

  const degreeSymbol = String.fromCodePoint(parseInt('00B0', 16));

  return (
    <div>
      <h2>{`${data.location.name}, ${data.location.country}`}</h2>
      <p>{data.current.weather_descriptions}</p>
      <p>{`${data.current.temperature} ${degreeSymbol}${
        metric ? 'C' : 'F'
      }`}</p>
      <img
        src={data.current.weather_icons[0]}
        alt={`Weather in ${data.location.name}`}
      />
    </div>
  );
};

export default LocationData;
