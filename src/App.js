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
import { Footer } from "./Components/Footer";
import ScrollToTop from "./Components/ScrollToTop";


function App() {

  return (
    <div className="App my-sm-4">
     <NavBar  />
     <Landing />
     <Skills />
     <Router>
      
        <Projects   />
        
        
        <Routes>

            
           
            <Route  path="/home"    element={<Landing/>} />

            <Route  path="/skills"  element={<Skills />} />
            
            <Route  path="first"    element = {[<FirstSec/>, < SecondSec />,]} />
            
            

            <Route  path="second"   element = {< SecondSec />} />

            <Route  path="third"    element = {< ThirdSec/>} />

        </Routes>

    </Router>

    <Footer/>
    
      </div>
  );
}

export default App;
