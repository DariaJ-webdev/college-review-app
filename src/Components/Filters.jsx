import React, { useState, useEffect } from 'react';
import '../styles/filters.css';
import { locations, fieldsOfStudy } from '../Services/filterOptions.jsx';
import graduationImage from '../assets/undraw_graduation.svg';

function Filters({ filters = { location: [], field: [] }, onFilterChange }) {
  const [localFilters, setLocalFilters] = useState(filters);
  const [selectKey, setSelectKey] = useState(0);

  useEffect(() => {
    setLocalFilters(filters);
  }, [filters]);

  function handleApplyFilters() {
    onFilterChange(localFilters);
  }

  function handleResetFilters() {
    const resetState = { location: [], field: [] };
    setLocalFilters(resetState);
    setSelectKey(prev => prev + 1); // Force re-render to ungray
    onFilterChange(resetState);
  }

  return (
    <section id="filters-section" className="filters-wrapper">
      <div className="filters-content">
        <div className="filter-card locale">
          <h3 className="filter-title">Location</h3>
          <select
            key={selectKey}
            multiple
            value={localFilters.location}
            onChange={(e) => {
              const selected = Array.from(e.target.selectedOptions, opt => opt.value);
              setLocalFilters(prev => ({ ...prev, location: selected }));
            }}
            className="filter-select"
          >
            {locations.map(loc => (
              <option key={loc.value} value={loc.value}>
                {loc.label}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-card field">
          <h3 className="filter-title">Field of Study</h3>
          <select
            key={selectKey + 1}
            multiple
            value={localFilters.field}
            onChange={(e) => {
              const selected = Array.from(e.target.selectedOptions, opt => opt.value);
              setLocalFilters(prev => ({ ...prev, field: selected }));
            }}
            className="filter-select"
          >
            {fieldsOfStudy.map(field => (
              <option key={field.value} value={field.value}>
                {field.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="filters-image-container">
        <div className="filters-image">
          <img
            src={graduationImage}
            alt="Graduation illustration"
            className="graduation-img"
          />
        </div>

        <div className="button-group">
          <button onClick={handleApplyFilters} className="apply-button">
            Apply Filters
          </button>
          
        </div>
      </div>
    </section>
  );
}

export default Filters;
