import React  from "react";
import {Link  , Outlet}  from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import FirstSec from "./FirstSec";



export default function Projects(){


    const style1 ={
            
            fontSize:'20px',
            color: "white",
            marginTop:'20px',
            padding: "20px",
            fontFamily: "Arial",
            textDecoration:'none',
            fontWeight:'500',
            
       
    }
   
    return(


        <div id="project"  style={{textAlign:'center'}}>
            <h1 className="p-3" >My Projects</h1>
            <p>My name is Medhat ,I live in Fayoum and this is my projects</p>
            <div>
                 <nav  className="  mx-auto Tabs m-3 "  >
                 <HashLink className="Tab  tab " style={style1} smooth to="first">First Section </HashLink>
                 <HashLink className="Tab  tab"  style={style1} smooth to="second" >Second Section </HashLink>
                 <HashLink className="Tab  tab "  style={style1}  smooth to="third">Third Section </HashLink>
                 
                 </nav>

                 
            </div>
                 

                <Outlet/>
        </div>

       
    )
}