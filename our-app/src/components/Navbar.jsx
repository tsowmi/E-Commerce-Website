import { NavItem } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Badge from '@mui/material/Badge';


function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect fixed="top" expand="sm" bg="dark" variant="dark">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className='me-auto' >
            <Link to="/men" className="categories" style={{textDecoration:"none", color:"grey"}} >Men</Link>
            <Link className="categories" to="/women" style={{textDecoration:"none", color:"grey"}}>Women</Link>
            <Link className="categories" to="/kids" style={{textDecoration:"none", color:"grey"}}>Kids</Link>
            <Link className="categories" to="/electronics" style={{textDecoration:"none", color:"grey"}}>Electronics</Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand href="/" className='myBrand'>VS Shoppe</Navbar.Brand>
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto">
            <NavItem >
            <Link>
            <Badge badgeContent={0} color="primary" style={{marginRight:'15px'}}>
            <ShoppingCartIcon sx={{color: "white"}}/>
            </Badge>
            </Link>
            </NavItem>
            <NavItem>
            <Link>
            <Badge badgeContent={0} color="primary" style={{marginRight:'15px'}}>
            <FavoriteIcon sx={{color: "white"}}/>
            </Badge></Link></NavItem>
            
            <NavItem ><Link  className="categories" to="/login" style={{marginRight:"10px",marginLeft:'10px', textDecoration:"none", color:"grey"}}> Login</Link></NavItem>
            <NavItem ><Link  className="categories" to="/signup" style={{textDecoration:"none", color:"grey"}}>Signup</Link></NavItem>
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;

// function Navbar1()
// {
//   return(
//     <nav class="navbar navbar-inverse " style={{marginBottom: "0", width: "100%", height:"90pxS"}}>
//   <div class="container-fluid">
//     <div class="navbar-header">
//       <Link class="navbar-brand" to="/"  style={{textDecoration:"none", color:"grey", fontSize: "40px"}} >VS Shoppie</Link>
//     </div>
    
//       <Link style={{textDecoration:"none", color:"grey", fontSize: "large"}} to="/men">Men</Link>
//       <Link style={{textDecoration:"none", color:"grey", fontSize:"large"}} to="/women">Women </Link>
//       <Link style={{textDecoration:"none", color:"grey", fontSize:"large"}} to="/kids">Kids</Link>
    
//     <Link style={{textDecoration:"none", color:"grey", fontSize:"large"}} to="/signup"><span class="glyphicon glyphicon-user"></span> Sign Up</Link>
//     <Link style={{textDecoration:"none", color:"grey", fontSize:"large"}} to="/login"><span class="glyphicon glyphicon-log-in"></span> Login</Link>
    
//   </div>
// </nav>
//   );
// }

// export default Navbar1;

// function Navbar1()
// {
//   return(
//     <nav className="navbar">
//       <Link to="/" style={{textDecoration:"none", color:"grey"}}><div id="logoWidth"><div align='left' className="logo" style={{textDecoration:"none" }}>VS Shoppie</div></div></Link>
//         <ul className="nav-links">
//           <input type="checkbox" id="checkbox_toggle" /> 
//          <label for="checkbox_toggle" className="hamburger">&#9776;</label>
//           <div className="menu">
//               <li><Link to="/men" style={{textDecoration:"none"}} >Men</Link></li>
//               <li><Link to="/women" style={{textDecoration:"none"}}>Women</Link></li>
//               <li><Link to="/kids" style={{textDecoration:"none"}}>Kids</Link></li> 
//               <li><Link to="/electronics" style={{textDecoration:"none",}}>Electronics</Link></li>              
//               <li><Link to="/login" style={{textDecoration:"none"}}>Login</Link></li>
//               <li><Link to="/signup" style={{textDecoration:"none"}}>Sign Up</Link></li>
//           </div>
//       </ul>
//     </nav>
//   );
// }

// export default Navbar1;