import React, { useState, useEffect } from 'react';
import Search from './Search';
import Filters from './Filters';
import Results from './Results';
import '../styles/searchPages.css';
import { fetchCollegeByName } from '../Services/utils.jsx';

function SearchPage({ setResults, setIsLoading, setValidationError }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({ location: [], field: [] });
  const [localResults, setLocalResults] = useState([]);
  const [localError, setLocalError] = useState('');

  const handleFilterChange = async (newFilters) => {
    setFilters(newFilters);
    setIsLoading(true);

    try {
      const fetchedResults = await fetchCollegeByName(searchTerm, newFilters);
      setResults(fetchedResults);
      setLocalResults(fetchedResults);
      console.log("📦 LocalResults set in SearchPage:", fetchedResults);
    } catch (error) {
      const message = 'Something went wrong. Please try again.';
      setValidationError(message);
      setLocalError(message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = async () => {
    if (!searchTerm.trim()) {
      setValidationError('Please enter a college name.');
      setLocalError('Please enter a college name.');
      return;
    }

    setIsLoading(true);
    setValidationError('');
    setLocalError('');

    try {
      const fetchedResults = await fetchCollegeByName(searchTerm, filters);
      setResults(fetchedResults);
      setLocalResults(fetchedResults);
      console.log("📦 LocalResults set in SearchPage:", fetchedResults);
    } catch (error) {
      const message = 'Something went wrong. Please try again.';
      setValidationError(message);
      setLocalError(message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setSearchTerm('');
    setFilters({ location: [], field: [] });
    setResults([]);
    setLocalResults([]);
    setValidationError('');
    setLocalError('');
    setIsLoading(false);
  };

  return (
    <div className="search-page-container">
      <Search
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSearch={handleSearch}
        handleReset={handleReset}
        validationError={localError}
      />

      <div className="results-section">
        {localResults.length > 0 && (
          <>
            <h2 className="results-heading">
              Search Results Or{' '}
              <a href="#filters-section" className="scroll-link jump-to-filters">
                Jump to Filters
              </a>
            </h2>
            <Results results={localResults.slice(0, 9)} filters={filters} />
          </>
        )}
      </div>

      <Filters filters={filters} onFilterChange={handleFilterChange} />
    </div>
  );
}

export default SearchPage;
