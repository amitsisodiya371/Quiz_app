
import './App.css';

import React from 'react'
import { useState } from 'react';
import Home from './Components/Context/Home';
import {Routes,Route} from "react-router-dom";
import Result from "./Pages/Result"
import Main from "./Components/Context/Main"
import Signup from "./Components/Context/Signup"
import Quiz from './Pages/Quiz';
import { ctx } from './Components/Context/myContext';
import Login from './Components/Context/Login';
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="App">

<ctx.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Home" element={<Home/>} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/quiz"element={<Quiz/>}/>
          <Route path="/result" element={<Result/>}/>
        </Routes>
      </ctx.Provider>
      
    </div>
  );
}

export default App;
