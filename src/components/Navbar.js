import React from 'react'
import { Avatar } from '../assets/Index'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="btn btn-primary" data-bs-toggle="offcanvas" href="#offcanvasScrolling" role="button" aria-controls="offcanvasExample">
                        <i className="bi bi-list"></i>
                    </a>
                    <a className="navbar-brand ms-3" href="#">The Gioi Long Chim</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <form className="d-flex ms-auto" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit"><i className="bi bi-search"></i></button>
                        </form>
                        <ul className="navbar-nav ">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src={Avatar} width="50px" height="50px" className='rounded-circle' />Tran Ngoc Tu
                                </a>
                                <ul className="dropdown-menu text-center">
                                    <li><NavLink to="/profile" className="dropdown-item">Profile</NavLink></li><hr/>
                                    <li><NavLink to="/login" className="dropdown-item">Logout</NavLink></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div>
                <div className="offcanvas offcanvas-start" style={{width: "15%"}} data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                    <div className="offcanvas-header">
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                    <NavLink to="/adminDashboard" className=" fs-4 text-center text-decoration-none text-dark">Dashboard</NavLink><hr/>
                    <NavLink to="/adminDashboard" className="fs-5 text-center text-decoration-none text-dark">Manager</NavLink><hr/>
                    <NavLink to="/adminDashboard" className="fs-5 text-center text-decoration-none text-dark">Staff</NavLink><hr/>
                    <NavLink to="/adminDashboard" className="fs-5 text-center text-decoration-none text-dark">Customer</NavLink>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Navbar