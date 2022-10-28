import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import { useState } from 'react';
import Header from './components/Header';
import Menu from './components/Menu';

function App() {

  const [open, setOpen] = useState(true);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/menu" element={<Menu />} />
        <Route path="/recipes" element={<Menu />} />
      </Routes>
    </Router>
  );
}

export default App;
