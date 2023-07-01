import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF ,FaLinkedinIn ,FaInstagram ,FaFacebook} from "react-icons/fa";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { MailchimpForm } from "./Mail";


export const Footer = () => {
    return (
      <footer className="footer">
        <Container>
          <Row className="align-items-center">
            <MailchimpForm />
            <Col size={12} sm={4} xs={12} className="pt-3">
              <h2>LOGO</h2>
            </Col>
            <Col size={12} sm={8} xs={12} className="text-center text-sm-end  ">
             
              <Nav className="pt-4">
                <Nav.Link  id='socico' href='https://linkedin.com/' target='_blank'> <FaLinkedinIn /> </Nav.Link>
                <Nav.Link  id='socico' href='https://facebook.com/' ><FaFacebookF /> </Nav.Link>
                <Nav.Link  id='socico' href='https://instagram.com/' ><FaInstagram /></Nav.Link>
           
                
                <p className="pt-3">Copyright 2023. All Rights Reserved By Medhat Hamada</p>
          </Nav>
              
            </Col>
          </Row>
        </Container>
      </footer>
    )
  }