import React from 'react';
import './Header.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import image from '../../images/logo_v4.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
    
      
      <Navbar>
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={image}
            width="120"
            height="50"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
    <Nav className="ms-auto nav-bar">
      <Link className='ms-4 nav-color' to ='/home'><i class="fa fa-home me-2"></i><span>Home</span></Link>
      <Link className='ms-4 nav-color'to ='/reviews'><i class="fa fa-comments me-2"></i><span>Reviews</span></Link>
      <Link className='ms-4 nav-color'to ="/dashboard"><i class="fa fa-chart-line me-2"></i><span>Dashboard</span> </Link>
      <Link className='ms-4 nav-color'to ="/blogs"><i class="fa fa-rss me-2"></i><span>Blogs</span> </Link>
      <Link className='ms-4 nav-color'to ="about"><i class="fa fa-user me-2"></i><span>About</span> </Link>
    </Nav>
      </Container>
    </Navbar>

    );
};

export default Header;