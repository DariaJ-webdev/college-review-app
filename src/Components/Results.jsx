import React, {useState} from 'react';
import '../styles/results.css';

function Results({ results = [], filters }) {
  console.log("📥 Results received in Results.jsx:", results);
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="results-container">
      {results.length === 0 ? (
        <p>Sorry, we didn't find a match.</p>
      ) : (
        results.map((college, index) => {
          console.log(`🏫 Rendering college #${index}:`, college.school?.name);
          console.log("🏫 Full college object:", college);
          const name = college["school.name"] || 'Unnamed Institution';
          const city = college["school.city"] || 'Unknown City';
          const state = college["school.state"] || 'Unknown State';
          const sat = college["latest.admissions.sat_scores.average.overall"];
          const act = college["latest.admissions.act_scores?.midpoint.cumulative"];
          // 🎯 Diversity Index Calculation (flat keys)
          let diversityIndex = null;

          // Extract race/ethnicity proportions using flat keys
          const raceData = {
          asian: college["latest.student.demographics.race_ethnicity.asian"],
          black: college["latest.student.demographics.race_ethnicity.black"],
          hispanic: college["latest.student.demographics.race_ethnicity.hispanic"],
          NHPI: college["latest.student.demographics.race_ethnicity.nhpi"],
          white: college["latest.student.demographics.race_ethnicity.white"],
          // Add more groups if needed (e.g., white, native, pacific, two_or_more)
          // 0 means all students are from the same racial/ethnic group and 1 means diverse

          };

          // Filter out non-numeric values
          const proportions = Object.values(raceData).filter(p => typeof p === 'number');

        // Calculate diversity index: 1 - sum of squared proportions
          if (proportions.length > 0) {
          const sumOfSquares = proportions.reduce((sum, p) => sum + p * p, 0);
          diversityIndex = (1 - sumOfSquares).toFixed(2);
        }

  return (
    <div key={index} className="college-card">
      <h3>{name}</h3>
      <p>{city}, {state}</p>
      <p>SAT Avg: {sat ?? 'N/A'}</p>
      <p>ACT Midpoint: {act ?? 'N/A'}</p>

      <button onClick={() => toggleExpand(index)} className="view-button">
        {expandedIndex === index ? 'Hide Details' : 'View Results'}
      </button>

      {expandedIndex === index && (
        <div className="expanded-info">
          <p><strong>🔖Fields of Study:</strong> {Array.isArray(filters.field) ? filters.field.join(', ') : 'N/A'}  
          </p>

          <p><strong>🎓Graduation Rate:</strong> 
            {college.latest?.completion?.rate_suppressed?.overall != null
              ? `${(college.latest.completion.rate_suppressed.overall * 100).toFixed(1)}%`
              : 'N/A'}
          </p>
          <p><strong>🤑Tuition:</strong> ${college.latest?.cost?.tuition?.in_state || 'N/A'} (in-state)</p>
          <p><strong>👥Student Body:</strong> {college.latest?.student?.size || 'N/A'} enrolled</p>

          
          <p><strong>🫱🏾‍🫲🏾Diversity Index:</strong> {diversityIndex ?? 'N/A'}</p>

          {college.school?.school_url ? (
            <a href={college.school.school_url} target="_blank" rel="noopener noreferrer">
              🏫Visit Website
            </a>
          ) : (
            <p><em>No website available</em></p>
          )}
        </div>
      )}
    </div>
  );
        })
      )}
    </div>
  );
}

export default Results;
