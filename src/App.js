import logo from './logo.svg';
import './App.css';
import {Link, Routes, Route, Router} from "react-router";
import Home from './pages/Home';
import Market from './pages/Market'
import Markets from './pages/Markets';
import { useState, useEffect } from 'react';

function App() {
  const [markets, setMarkets] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/markets")
      .then(response => response.json())
      .then(data => setMarkets(data));
  }, []);

  return (
    <article class="container-fluid">
        <nav class="navbar navbar-expand-md navbar-dark bg-dark-subtle p-3">
          <Link class="gradient-text display-5 me-2" to={"/"}>😇MnhoMarket</Link>
          <div className="">
            <Link class="display-6" to={"/markets"}>Markets</Link>
          </div>
        </nav>
        <br/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/markets/:id' element={<Market/>}/>
            <Route path='/markets' element={<Markets markets={markets}/>}/>
        </Routes>
    </article>
  );
}

export default App;
