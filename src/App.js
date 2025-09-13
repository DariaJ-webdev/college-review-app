import React, { useState } from "react";
import Nav from "./Components/Nav.jsx";
import Welcome from "./Components/Welcome.jsx";
import SearchPage from "./Components/SearchPage.jsx";
import Results from "./Components/Results.jsx";
import LoadingSkeleton from "./Components/LoadingSkeleton.jsx";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({ location: [], field: [] });
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [validationError, setValidationError] = useState("");

  return (
    <div className="app-container">
      <Nav />

      <div className="welcome-section">
        <Welcome />
      </div>

      

      <div className="search-section">
        <SearchPage
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          filters={filters}
          setFilters={setFilters}
          setResults={setResults}
          setIsLoading={setIsLoading}
          setValidationError={setValidationError}
        />
      </div>

         
    </div>
  );
}

export default App;
