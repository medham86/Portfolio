import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export const MailchimpForm = () => {

  return (
           
                    <Container className="contact">
                        <Row className="align-items-center">
                           
                            <Col size={12} sm={6} className="pt-3">
                            <h2 className="pt-4">See My Projects At Once & Leave Here Your E-mail Address Plz</h2>
                            </Col>
                            <Col size={12} sm={6} className="text-center text-sm-end  ">

                            <Form>
                                <Form.Group className="mb-3 p-3" controlId="exampleForm.ControlInput1">
                                    
                                    
                                </Form.Group>
                                
                            </Form>

                            <InputGroup className="mb-3 " size="lg">
                                    <Form.Control type="email" placeholder="Email@example.com" />
                                    <Button variant="outline-warning" id="button-addon2">Send</Button>
                            </InputGroup>
                            </Col>
                        </Row>
                </Container>
            
   
  )

}