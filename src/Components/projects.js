import React  from "react";
import {Link  , Outlet}  from "react-router-dom";
import Nav from 'react-bootstrap/Nav';

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
                 <nav  className="p-2 w-50 m-auto" style={{border:'1px solid black',borderRadius:'15px'}}>
                    <Link style={style1} to="first"> First Section </Link>
                    <Link style={style1} to="second"> Second Section</Link>
                    <Link style={style1} to="third"> Third Section</Link>
                 </nav>
            </div>
                 

                <Outlet/>
        </div>
    )
}