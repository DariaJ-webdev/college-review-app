import React from 'react';

function LoadingSkeleton() {
  return (
    <div className="skeleton-grid">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="skeleton-card" />
      ))}
    </div>
  );
}

export default LoadingSkeleton;


