import { NavItem } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {userContext} from  '../App.jsx'
import React, {useContext, useEffect, useState} from 'react'
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Dropdown from 'react-bootstrap/Dropdown';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import SettingsIcon from '@mui/icons-material/Settings';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import LogoutIcon from '@mui/icons-material/Logout';

import { Link } from "react-router-dom";


function Navbar1() {
  const {state, dispatch}= useContext(userContext);
  
  console.log(dispatch);
  console.log("This is navbar")
  console.log(state)
  const RenderNavbar=()=>{
//     useEffect(()=>{
//       console.log("Heyy I in cart's useEffect");
//       const fetchcartItems=async()=> {
//           try{
//               const response=await fetch('/getCartItems',{
//                   method:'GET',
//                   headers: {
//                       Authorization: `Bearer ${localStorage.getItem('token')}`,                        
//                     },
//               });
//               const data=await response.json();
//               console.log("data");
//               console.log(data);
//               if(response.status!==500)
//               {                    
//                 setCartItemCount(data.length);
//               }
//               else{
//                   alert("An error occured, please try later")
//               }
             
//           }catch(err)
//           {
//               alert("An error occured, please try again")
//           }
//       }
//       fetchcartItems();
//   },[]);

//   useEffect(()=>{
//     console.log("Heyy I in wishlist's useEffect");
//     const fetchWishlistItems=async()=> {
//         try{
//             const response=await fetch('/getWishlistItems',{
//                 method:'GET',
//                 headers: {
//                     Authorization: `Bearer ${localStorage.getItem('token')}`,                        
//                   },
//             });
//             const data=await response.json();
//             console.log("data");
//             console.log(data);
//             if(response.status!==500)
//             {                    
//               setWishlistItemCount(data.length);
//             }
//             else{
//                 alert("An error occured, please try later")
//             }
           
//         }catch(err)
//         {
//             alert("An error occured, please try again")
//         }
//     }
//     fetchWishlistItems();
// },[]);


    if(state){
      return(
        <>
        <Navbar collapseOnSelect fixed="top" expand="sm" bg="dark" variant="dark">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className='me-auto' >
              <Link className="categories" to="men">Men</Link>
              <Link className="categories" to="women">Women</Link>
              <Link className="categories" to="kids">Kids</Link>
              <Link className="categories" to="electronics">Electronics</Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Brand href="/" className='myBrand'>VS Shoppe</Navbar.Brand>
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
          <NavItem style={{padding:'6px'}}>
            <Link to="/wishlist" className="categories">
              <FavoriteIcon />
              {/* {WishListItemCount > 0 && (
                <span className="wishlist-count">{WishListItemCount}</span>
              )} */}
            </Link>
          </NavItem>
          <NavItem style={{padding:'6px'}}>
            <Link to="/cart" className="categories">
              <ShoppingCartIcon />
              {/* {cartItemCount > 0 && (
                <span className="cart-count">{cartItemCount}</span>
              )} */}
            </Link>
          </NavItem>
          
            
            {/* <NavItem ><Nav.Link  className="categories" href="logout">logout</Nav.Link></NavItem>  */}
            <NavItem >
            <Dropdown style={{paddingRight:'20px'}}>
              <Dropdown.Toggle variant="dark" id="dropdown-basic">
                <PersonIcon />
              </Dropdown.Toggle>            
              
              <Dropdown.Menu>  
                <Dropdown.Item href="logout"><AccountCircleIcon /> Profile</Dropdown.Item>
                <Dropdown.Item href="#/action-2"><LocalShippingIcon /> Orders</Dropdown.Item>
                <Dropdown.Item href="#/action-3"><FavoriteIcon /> Wishlist</Dropdown.Item>
                <Dropdown.Item href="logout"><SettingsIcon /> Settings</Dropdown.Item>
                <Dropdown.Item href="logout"><HeadsetMicIcon /> Help Centre</Dropdown.Item>
                <Dropdown.Item href="logout"><LogoutIcon /> Logout</Dropdown.Item>

              </Dropdown.Menu>
              
            </Dropdown>
          </NavItem>
 
  
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </>
      )

    }else{
      return(
        <>
        <Navbar collapseOnSelect fixed="top" expand="sm" bg="dark" variant="dark">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className='me-auto' >
              <Link className="categories" to="men">Men</Link>
              <Link className="categories" to="women">Women</Link>
              <Link className="categories" to="kids">Kids</Link>
              <Link className="categories" to="electronics">Electronics</Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Brand href="/" className='myBrand'>VS Shoppe</Navbar.Brand>
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
          <NavItem ><Link  className="categories" to="login">Login</Link></NavItem> 
          <NavItem ><Link  className="categories" to="signup">Signup</Link></NavItem>
          
          {/* <NavItem ><Nav.Link  className="categories" href="logout">logout</Nav.Link></NavItem> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </>
        
      )

    }
    
  }
  return (
    <div>
   
    <RenderNavbar />
    
    </div>
  );
}

export default Navbar1;




