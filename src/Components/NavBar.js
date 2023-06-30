import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaFacebookF ,FaLinkedinIn ,FaInstagram ,FaFacebook} from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { HashLink } from 'react-router-hash-link';
import { Outlet ,Link} from 'react-router-dom';
import { useRef } from 'react';


function NavBar() {

  return (
    <div id='home'  className='container'  style={{minHeight:'10vh'}} >
         <Navbar style={{opacity:'0.7'}}    fixed='top'  expand="md"   variant='dark' bg='dark' >
         
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

       

         
          <Form className="d-flex ms-auto">

          <Nav.Link href='/second'>

            <Button >Let's connect</Button>
           
            </Nav.Link>

           
             
             
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
   
  );
}




// function NavBar() {
//     return (
//       <div id='home' style={{height:'50vh'}}>
//         <Navbar collapseOnSelect expand="lg" bg='dark' variant='dark' fixed='top' >
//         <Container >
//           <Navbar.Brand href="#home">LOGO</Navbar.Brand>
//           <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//           <Navbar.Collapse id="responsive-navbar-nav">
//             <Nav id='hsp' >
//               <Nav.Link href="#home">Home</Nav.Link>
//               <Nav.Link href="#skills">Skills</Nav.Link>
//               <Nav.Link href="#projects">Projects</Nav.Link> 
//             </Nav>
//             <Nav>
           
//               <Nav.Link  id='socico' href='https://linkedin.com/' target='_blank'> <FaLinkedinIn /> </Nav.Link>
//               <Nav.Link  id='socico' href='https://facebook.com/' ><FaFacebookF /> </Nav.Link>
//               <Nav.Link  id='socico' href='https://instagram.com/' ><FaInstagram /></Nav.Link>
              
//             </Nav>
//             <Nav>
//                <Nav.Link id='connect' href='#connect'> Let's connect</Nav.Link>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
        
          
//       </div>
//     );
//   }
  
  export default NavBar;