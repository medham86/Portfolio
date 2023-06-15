import React from "react";
import { Container } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {useTypewriter , Cursor} from 'react-simple-typewriter'
import { keyFor } from "react-social-icons";
import Stack from 'react-bootstrap/Stack';

function Landing(){

    const [text] = useTypewriter({
        words:['FrontEnd Developer','BackEnd Developer','FullStack Developer'],
        loop:{},
        deleteSpeed:'500',
        typeSpeed:'500'
        
    });

    const style2 ={

        backgroundColor:'#27374D',
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
    

<Stack  direction="horizontal" gap={4}  style={{height:'90vh',backgroundColor:'#27374D',color:'white'}}>
      <div className="mx-4 "  ><span style={style2} >Welcome All in my Portfolio</span>  
                <h2>  Hi,I'm Medhat <br /> Hamada </h2>
                <h2> 
                    <span style={{color:"white"}}>{text} </span>
                    <Cursor/>
                </h2>
                <span>Hello everyone , i have 1 year experience in web development.</span></div>
      <div className=" m-auto" ><img className="profile" width={300} height={300}  src="my1.jpeg" /></div>
      
      
    </Stack>
 

    // </Container>
           
)        
}     

export default Landing ;