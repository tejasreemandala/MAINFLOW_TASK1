import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route
import HomePage from './pages/Home/HomePage'; // Adjust the path to where HomePage is located

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}
   
          
        
      