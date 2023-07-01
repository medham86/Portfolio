import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaFacebookF ,FaLinkedinIn ,FaInstagram ,FaFacebook} from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import { HashLink  } from 'react-router-hash-link';

import React  from 'react';

import { HashRouter  as Router} from 'react-router-dom';




function NavBar() {

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };



  return (
    <Router>
    <div id='home'  className='container'  style={{minHeight:'10vh'}} >
         <Navbar style={{opacity:'0.7'}}    fixed='top'  expand="lg"   variant='dark' bg='dark'>
         
      <Container >
        <Navbar.Brand href="#">LOGO</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0 m-4" 
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link  href='#home'>Home</Nav.Link>
            <Nav.Link href='#skills'>Skills</Nav.Link>
            <Nav.Link href='#project'>Projects</Nav.Link>
           
            
          </Nav>
          <Nav
            className="ms-auto my-1 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
                <Nav.Link  id='socico' href='https://linkedin.com/' target='_blank'> <FaLinkedinIn /> </Nav.Link>
                <Nav.Link  id='socico' href='https://facebook.com/' ><FaFacebookF /> </Nav.Link>
                <Nav.Link  id='socico' href='https://instagram.com/' ><FaInstagram /></Nav.Link>
           
            
          </Nav>
            <Nav>

            <HashLink  to='second'>
                <Button className='mx-3'  variant="outline-warning">Let’s Connect</Button>
            </HashLink>
       
            </Nav>
            
            
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    </Router>
  );
}


  
  export default NavBar;