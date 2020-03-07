import React from 'react';

const UnitToggle = ({ metric, onToggle }) => {
  return (
    <div className="ui buttons">
      <button
        onClick={onToggle}
        className={`ui button ${metric ? 'active' : ''}`}
      >
        &deg;C
      </button>
      <div className="or"></div>
      <button
        onClick={onToggle}
        className={`ui button ${metric ? '' : 'active'}`}
      >
        &deg;F
      </button>
    </div>
  );
};

export default UnitToggle;
