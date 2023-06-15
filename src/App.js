import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import NavBar from './Components/NavBar';
import './App.css';
import React from 'react';
import Landing from './Components/landing';   
import Skills from './Components/Skills';
import FirstSec from "./Components/FirstSec";
import SecondSec from "./Components/SecondSec";
import ThirdSec from "./Components/ThirdSec";
import Projects from "./Components/projects";


function App() {

  return (
    <div className="App">
     <NavBar />
     <Landing />
     <Skills />
     <Router>
      
        <Projects />
        
        <Routes>

            <Route  path="*"        element={  <h2>Page Not Found</h2> } />
           
            <Route  path="/home"    element={<Landing/>} />

            <Route  path="/skills"  element={<Skills />} />
            
            <Route  path="first"    element = {<FirstSec/>} />

            <Route  path="second"   element = {< SecondSec/>} />

            <Route  path="third"    element = {< ThirdSec/>} />

        </Routes>

    </Router>
    
      </div>
  );
}

export default App;
