import logo from './logo.svg';
import './App.css';
import {Link, Routes, Route, Router} from "react-router";
import Home from './pages/Home';
import Trending from './pages/Trending';
import { useState } from 'react';


function App() {
  const [markets, setMarkets] = useState([
    {
      ID:1,
      Name:"Bude zítra den?",
      Probabilty:99,
      ImageLink:"https://media.sketchfab.com/models/8267f7d3cbe24a6d968e43408f3edf88/thumbnails/834ee02366654bb5ab1f37daf2aa2279/42e895a4700f4e7386319d66d7c2989b.jpeg"
    },
    {
      ID:2,
      Name:"Bolševik comeback 2026?",
      Probabilty:2,
      ImageLink:"https://media.sketchfab.com/models/8267f7d3cbe24a6d968e43408f3edf88/thumbnails/834ee02366654bb5ab1f37daf2aa2279/42e895a4700f4e7386319d66d7c2989b.jpeg"
    },
    {
      ID:3,
      Name:"Ukončí se Marek do konce roku 2026?",
      Probabilty:82,
      ImageLink:"https://media.sketchfab.com/models/8267f7d3cbe24a6d968e43408f3edf88/thumbnails/834ee02366654bb5ab1f37daf2aa2279/42e895a4700f4e7386319d66d7c2989b.jpeg"
    },
    {
      ID:4,
      Name:"Gamba!!!",
      Probabilty:50,
      ImageLink:"https://media.sketchfab.com/models/8267f7d3cbe24a6d968e43408f3edf88/thumbnails/834ee02366654bb5ab1f37daf2aa2279/42e895a4700f4e7386319d66d7c2989b.jpeg"
    }
  ])

  return (
    <article class="container-fluid">
        <nav class="navbar navbar-expand-md navbar-dark bg-dark-subtle p-3">
          <Link class="gradient-text display-5 me-2" to={"/"}>😇MnhoMarket</Link>
          <div className="">
            <Link class="display-6" to={"/trending"}>Trending</Link>
          </div>
        </nav>
        <br/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/trending' element={<Trending markets={markets}/>}/>
        </Routes>
    </article>
  );
}

export default App;
