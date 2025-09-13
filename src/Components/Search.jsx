import React from 'react';
import '../styles/search.css';
import bestPlace from '../assets/undraw_bestPlace.svg';
import FootstepsTrail from './FootstepsTrail.jsx';




function Search({ searchTerm, setSearchTerm, handleSearch, handleReset }) {

  return (
    <section className="search-container">
      <div className="search-left">
        <img src={bestPlace} alt="college campus" className="bestPlace" />
      </div>

      <div className="search-right">
        <div className="footsteps-wrapper">
          <FootstepsTrail />
          <h2 className="step-one">Step right up! start here</h2>

          <div className="search-input-wrapper">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="e.g. Howard University"
              className="search-input"
            />
            <div className="button-wrapper">
            <button onClick={handleSearch} className="search-button">
              Search
            </button>
            <button onClick={handleReset} className="reset-button">
            Reset All
            </button>
            </div>

            

          </div>
        </div>
      </div>
    </section>
  );
}

export default Search;
