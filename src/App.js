import logo from './logo.svg';
import './App.css';
import {Link, Routes, Route, Router} from "react-router";
import Home from './pages/Home';
import Market from './pages/Market'
import Markets from './pages/Markets';
import { useState, useEffect } from 'react';
import Credit from './pages/Credit';

function App() {
  const [markets, setMarkets] = useState([]);
  const [credit, setCredit] = useState(0);

  useEffect(() => {
    fetch("http://localhost:8080/api/markets")
      .then(response => response.json())
      .then(data => setMarkets(data));
    fetch("http://localhost:8080/api/credit")
      .then((res) => res.json())
      .then((data) => setCredit(data));
  }, []);

  const changeCredit = async (n) => {
    let newCredit = Number((credit + n).toFixed(2));
    if(newCredit <= 0)
      setCredit(0);
    else 
      setCredit(newCredit)

    await fetch("http://localhost:8080/api/credit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(n),
    });
  };

  return (
    <article class="container-fluid">
        <nav class="navbar navbar-expand-md navbar-dark bg-dark-subtle p-2 gap-2">
          <Link class="gradient-text display-5 me-2 text-decoration-none" to={"/"}>😇MnhoMarket</Link>
          <div className="d-flex gap-2">
            <Link class="display-6 text-decoration-none" to={"/markets"}>Markets</Link>
            <Link class="display-6 text-decoration-none" to={"/credit"}>Credit</Link>
          </div>
          <div className="ms-auto display-6">
            <p>Credit: {credit}$</p>
          </div>
        </nav>
        <br/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/markets/:id' element={<Market credit={credit} changeCredit={changeCredit}/>}/>
            <Route path='/markets' element={<Markets markets={markets}/>}/>
            <Route path='/credit' element={<Credit credit={credit} changeCredit={changeCredit}/>}></Route>
        </Routes>
    </article>
  );
}

export default App;
