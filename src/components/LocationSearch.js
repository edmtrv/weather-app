import React, { useState } from 'react';

const LocationSearch = ({ onSearchLocation }) => {
  const [term, setTerm] = useState('');

  const onFormSubmit = e => {
    e.preventDefault();
    onSearchLocation(term);
    setTerm('');
  };

  return (
    <div>
      <form className="ui action form" onSubmit={onFormSubmit}>
        <div className="ui input">
          <input
            onChange={e => setTerm(e.target.value)}
            value={term}
            type="text"
            placeholder="Enter Location..."
          />
        </div>
        <button className="ui button">Search</button>
      </form>
    </div>
  );
};

export default LocationSearch;
