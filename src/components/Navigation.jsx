import React from 'react';
import { Route, Navigate, Routes } from 'react-router-dom';

import { Results } from './Results';

export const Navigation = ({ darkTheme }) => {
  return (
    <div className='p-4'>
      <Routes>
        <Route exact path='/' element={<Navigate to='/search' replace />} />
        <Route
          exact
          path='/search'
          element={<Results darkTheme={darkTheme} />}
        />
      </Routes>
    </div>
  );
};
