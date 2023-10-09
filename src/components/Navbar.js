import React from 'react'
import { Avatar2 } from '../assets/Index'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <a class="btn btn-primary" data-bs-toggle="offcanvas" href="#offcanvasScrolling" role="button" aria-controls="offcanvasExample">
                        <i class="bi bi-list"></i>
                    </a>
                    <a class="navbar-brand ms-3" href="#">The Gioi Long Chim</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <form class="d-flex ms-auto" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit"><i class="bi bi-search"></i></button>
                        </form>
                        <ul class="navbar-nav ">
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src={Avatar2} width="50px" height="50px" className='rounded-circle' />Tran Ngoc Tu
                                </a>
                                <ul class="dropdown-menu text-center">
                                    <li><NavLink to="/profile" class="dropdown-item">Profile</NavLink></li><hr/>
                                    <li><NavLink to="/login" class="dropdown-item">Logout</NavLink></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div>
                <div class="offcanvas offcanvas-start" style={{ marginTop: "82px", width: "15%",marginBottom:"100px"}} data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                    <div class="offcanvas-header">
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
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