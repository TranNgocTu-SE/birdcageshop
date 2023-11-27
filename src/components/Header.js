import React from 'react'
import { Logo } from '../assets/Index'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../redux/authSlice'
import { useEffect } from 'react'
import { getCategories } from '../redux/categorySlice'

const Header = () => {

    const dispatch = useDispatch();

    const { cartTotalQuantity } = useSelector(state => state.cart);

    const { userInfo } = useSelector(state => state.auth);

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-transparent container  border-bottom border-success border-2">
                    <img src={Logo} alt='Logo' width="80px" className='rounded-circle me-3' />
                    <a className="navbar-brand" href="#">Thế giới lồng chim</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Thế giới lồng chim</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body shop-menu text-success" >
                            <ul className="navbar-nav justify-content-center align-items-center flex-grow-1">
                                <li className="nav-item">
                                    <NavLink className="nav-link active" aria-current="page" to="/" style={{ textDecoration: 'none', color:"green" }}>Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link active" aria-current="page" to="/products" style={{ textDecoration: 'none',color:"green" }}>Products</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link active" aria-current="page" to="/order" style={{ textDecoration: 'none',color:"green" }}>Orders</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link active" aria-current="page" to="/About" style={{ textDecoration: 'none',color:"green" }}>About</NavLink>
                                </li>
                            </ul>
                            <ul className="navbar-nav justify-content-end align-items-end flex-grow-1">
                                <li className="nav-item">
                                    <NavLink className="nav-link active" to="/shoppingCart" style={{ textDecoration: 'none' }}><i className="bi bi-cart fs-4"></i>
                                        <span className="translate-middle badge rounded-pill bg-danger">
                                            {cartTotalQuantity}
                                        </span>
                                    </NavLink>
                                </li>
                                {userInfo ?
                                    <div>
                                        <li className="nav-item mb-1">
                                            {userInfo?.username}
                                        </li>
                                        <li className="nav-item mb-1">
                                        <NavLink className="nav-link active" aria-current="page" to='/login' onClick={() => dispatch(logout())} style={{ textDecoration: 'none',color:"green" }}>Logout</NavLink>
                                        </li>
                                    </div>
                                    :
                                    <div>
                                        <li className="nav-item mb-1">
                                            <NavLink className="nav-link" to="/register" style={{ textDecoration: 'none',color:"green" }}>Register</NavLink>
                                        </li>
                                        <li className="nav-item mb-1">
                                            <NavLink className="nav-link" to="/login" style={{ textDecoration: 'none',color:"green" }}>Login</NavLink>
                                        </li>
                                    </div>
                                }
                            </ul>
                        </div>
                    </div>

            </nav>
        </div>
    )
}

export default Header