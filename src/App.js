import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header';
import Menu from './components/Menu';
import Home from './components/Home';
import {useState} from 'react'

function App() {

  const [code, setCode] = useState('');

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/menu" element={<Menu code={code}/>} />
        <Route path="/recipes"  />
        <Route path="/" element={<Home setCode={setCode}/>} />
      </Routes>
    </Router>
  );
}

export default App;
