import React from 'react';
import s from './App.module.css';
import {Trade} from "./Trade/Trade";
import {Swap} from "./Swap/Swap";
import {Portfolio} from "./Portfolio/Portfolio";
import {Navbar} from "./Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import {Overview} from "./Overview/Overview";


function App() {
  return (
    <div>
      <Navbar/>
      <div>
        <Routes>
          <Route path='/' element={<Overview/>}/>
          <Route path='/swap' element={<Swap/>}/>
          <Route path='/trade' element={<Trade/>}/>
          <Route path='/portfolio' element={<Portfolio/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
