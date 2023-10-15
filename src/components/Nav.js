import React from 'react'
import { Avatar } from '../assets/Index'
import { NavLink } from 'react-router-dom'

const Nav = ({ Toggle }) => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-transparent">
            <i className="navbar-brand bi bi-justify-left fs-4" onClick={Toggle}></i>
            <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation"><i className="bi bi-justify"></i></button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src={Avatar} width="50px" height="50px" className='rounded-circle me-3' alt='avatar'  />Tran Ngoc Tu
                        </a>
                        <ul className="dropdown-menu text-center ">
                            <li><NavLink to="/profile" className="dropdown-item">Profile</NavLink></li><hr />
                            <li><NavLink to="/login" className="dropdown-item">Logout</NavLink></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav