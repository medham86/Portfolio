import React  from "react";
import {Link  , Outlet}  from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import { HashLink } from "react-router-hash-link";

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
                 <nav  className="p-2 w-50 m-auto" style={{border:'1px solid white',borderRadius:'15px'}}>
                 <HashLink  style={style1} smooth to="first">First Section </HashLink>
                 <HashLink  style={style1} smooth to="second">Second Section </HashLink>
                 <HashLink  style={style1}  smooth to="third">Third Section </HashLink>
                 </nav>
            </div>
                 

                <Outlet/>
        </div>
    )
}