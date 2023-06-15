import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {images} from './data'

const FirstSec = () => {

  
    return (

        <Container fluid  >

                <Row className=" firstsec text-center "  xs={12}>
                    
                        <Col> <img width={300} height={200}  src={images['2.jpg']} /> </Col>
                        <Col> <img width={300} height={200}  src={images['3.jpg']} /> </Col>
                        <Col> <img width={300} height={200}  src={images['4.jpg']} /> </Col>
                        <Col> <img width={300} height={200}  src={images['5.jpg']} /> </Col>
                        <Col> <img width={300} height={200}  src={images['6.jpg']} /> </Col>
                        <Col> <img width={300} height={200}  src={images['7.jpg']} /> </Col>

                </Row>
               
         </Container>

    )
};

export default FirstSec;