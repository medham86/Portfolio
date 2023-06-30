import React from "react";
import { Container } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {useTypewriter , Cursor} from 'react-simple-typewriter'
import { keyFor } from "react-social-icons";
import Stack from 'react-bootstrap/Stack';
import { images } from "./data";

function Landing(){

    const [text] = useTypewriter({
        words:['FrontEnd Developer','BackEnd Developer','FullStack Developer'],
        loop:{},
        deleteSpeed:'500',
        typeSpeed:'500'
        
    });

    const style2 ={

        
        fontSize:'25px',
        color: "white",
        padding: "5px",
        fontFamily: "Arial",
        textDecoration:'none',
        fontWeight:'bold',
        display:'block',
        marginBottom:'5px',
        width:'350px'
        
}

return (

        <section className="banner" id="home">
        <Container>
        <Row className="aligh-items-center ">
            <Col xs={12} md={6} xl={7} >
            <span className=" wrap ">
                    <span style={{padding:"5px",fontSize:"30px",background:"linear-gradient(to right, red , yellow)"}} >Welcome All in my Portfolio</span>  
                    <h2>  Hi,I'm Medhat <br /> Hamada </h2>
                    <h2> 
                        <span >{text} </span>
                        <Cursor/>
                    </h2>
                    <span style={{fontWeight:"bold"}}>Hello everyone , i have 1 year experience in web development.</span>
            </span>
            </Col>
            <Col xs={12} md={6} xl={5}>
            <span className="col"><img className="profile " width={300} height={300}  src={images['my.jpeg']} /></span>
            </Col>
        </Row>
        </Container>
        </section>

           
)        
}     

export default Landing ;