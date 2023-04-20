import React from 'react';
import Dashboard from '@/components/features/dashboard';

const dashboard = () => {
  return (
    <main>
      <div className="grid">
        <div className={`grid-span-full`}>
          <Dashboard />
        </div>
      </div>
    </main>
  );
};

export default dashboard;
