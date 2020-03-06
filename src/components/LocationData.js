import React from 'react';
import Loader from './Loader';

const LocationData = ({ data }) => {
  if (!data) {
    return <Loader />;
  }

  return <div>LocationData</div>;
};

export default LocationData;
