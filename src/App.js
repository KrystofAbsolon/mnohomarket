import logo from './logo.svg';
import './App.css';
import {Link, Routes, Route, Router} from "react-router";
import Home from './pages/Home';


function App() {
  return (
    <article class="container-fluid bg-dark">
        <nav class="navbar navbar-expand-md navbar-dark">
            <div className=''>
                <div className='container'>
                  <Link class="gradient-text display-6" to={"/"}>😇MnhoMarket</Link>
                </div>
            </div>
        </nav>
        <Routes>
            <Route path='/' element={<Home/>}/>
        </Routes>
    </article>
  );
}

export default App;
