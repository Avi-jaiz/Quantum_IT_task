import {AiFillMail,AiFillTwitterCircle} from 'react-icons/ai';
import {Navbar,Container, Nav}  from 'react-bootstrap';
import {AiFillClockCircle,AiFillInstagram} from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'
import '../Styles/navbar.css'

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
    <Container>
      <Navbar.Brand href="#home"><AiFillClockCircle className='icons' />Available 24/7</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
        <Navbar.Brand href="#home"><AiFillMail className='icons' />Mail us: xyz</Navbar.Brand>
          
        </Nav>
        <Nav>
          <Nav.Link href="#deets"><AiFillInstagram /></Nav.Link>
          <Nav.Link  href="#memes">
<AiFillTwitterCircle />
          </Nav.Link>

          <Nav.Link  href="#memes">
<BsFacebook />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  
  
  )
}

export default Header;






  



