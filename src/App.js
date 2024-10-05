import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './routes/HomePage';
import MyInfoProvider from './MyInfoProvider';

function App() {

  return (
    <MyInfoProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </MyInfoProvider>
  );
}

export default App;
