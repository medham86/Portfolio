import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const FirstSec = () => {
    return (
        <Container fluid  >

                <Row className=" firstsec text-center "  xs={12}>
                    

                        <Col> <img width={300} height={200}  src="./2.jpg" /></Col>
                        <Col> <img width={300} height={200}  src="./3.jpg" /></Col>
                        <Col> <img width={300} height={200}  src="./4.jpg" /></Col>
                        <Col> <img width={300} height={200}  src="./5.jpg" /></Col>
                        <Col> <img width={300} height={200}  src="./6.jpg" /></Col>
                        <Col> <img width={300} height={200}  src="./7.jpg" /></Col>

                </Row>
               
         </Container>
    )
};

export default FirstSec;