import { NavLink } from 'react-router'
import React from 'react'
import logo from  '../assets/logo.png'
import 'bootstrap/dist/css/bootstrap.min.css';


const Navbar = () => {
  return (
    <>
        <nav className='fs-5 bg-dark'>
            <ul className='d-flex flex-wrap justify-content-between px-5'>
                <li className='list-group w-25  bg-white border border-2 border-dark'>
                    <img src={logo} alt="" className='w-25 rounded-circle mx-auto '/>
                </li>
                <li className='d-flex flex-wrap align-items-center  gap-5'>
                    <div className='d-flex flex-wrap align-items-center gap-3'>
                        <NavLink to="/" className='text-decoration-none fw-bold navlinkColor'>Home</NavLink>
                        <NavLink to="/product" className='text-decoration-none fw-bold navlinkColor'>Product</NavLink>
                        <NavLink to="/profile" className='text-decoration-none fw-bold navlinkColor'>Profile</NavLink>
                        <NavLink to="/login" className='navlinkColor'><button className='px-4 py-1 rounded-2'>Login</button></NavLink>
                    </div>
                    <div>
                        <NavLink to="/cart" className='navlinkColor'><i class="fa-solid fa-cart-shopping me-3 "></i></NavLink>
                        <NavLink to="/wishlist" className='navlinkColor'><i class="fa-regular fa-heart"></i></NavLink>
                    </div>
                </li>
            </ul>
        </nav>
    </>
)
}

export default Navbar