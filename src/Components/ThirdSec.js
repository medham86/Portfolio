import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';




const ThirdSec = () => {
    return (
        <div  style={{height:'90vh',backgroundColor:'#27374D',color:'white',textAlign:'center'}}>
            <p>Hello My name is Medhat Hamada , welcome </p>
            <Container>
            <Row  className="d-flex align-items-center  py-4" >
                <Col className="text-center ">
                    <img  id="contact"  src="contact.svg" />
                </Col>
                <Col>
                <h2 className="text-start"> Get In Touch</h2>
                <Form >
                    
                    <Form.Group className="my-3 d-flex " controlId="exampleForm.ControlInput1" >           
                         <Form.Control className="mx-1"  type="text" placeholder="First Name" />
                         <Form.Control   type="text" placeholder="Last Name" />
                    </Form.Group>

                    <Form.Group className="mb-3 d-flex " controlId="exampleForm.ControlInput1">
                         <Form.Control className="mx-1" type="email" placeholder="Enter Email" />
                         <Form.Control  type="number" placeholder="Phone No." />
                    </Form.Group>

                    <Form.Group className="mb-3 " controlId="exampleForm.ControlTextarea1"> 
                        <Form.Control as="textarea" rows={5} placeholder="Leave Message"  />
                    </Form.Group>
                   
                    <Button className="w-50"  variant="outline-warning" type="submit">
                        Send
                    </Button>
                    </Form>
                
                </Col>
            </Row>

            </Container>

        </div>
    )
};



export default ThirdSec;