import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header';
import Menu from './components/Menu';

function App() {


  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/menu" element={<Menu />} />
        <Route path="/recipes"  />
      </Routes>
    </Router>
  );
}

export default App;
