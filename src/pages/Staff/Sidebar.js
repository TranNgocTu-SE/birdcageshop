import React from 'react'
import '../style.css'
import { NavLink } from 'react-router-dom'
import { logout } from '../../redux/authSlice'
import { useDispatch } from 'react-redux'

const Sidebar = () => {

    const dispatch = useDispatch();

    return (
        <div className='sidebar d-flex justify-content-between flex-column bg-dark text-white p-3 vh-100'>
            <div>
                <a href='' className='p-3 text-decoration-none text-white'>
                    <i className='bi bi-code-slash fs-4 me-4'></i>
                    <span className='fs-4'>Code with you</span>
                </a>
                <hr className='text-secondary mt-2' />
                <ul className='nav nav-pills flex-column'>
                    <li className='nav-item p-3'>
                        <NavLink to='/homeAdmin' className='text-decoration-none text-white'>
                            <i className='bi bi-speedometer2 me-3'></i>
                            <span><strong>Dashboard</strong></span>
                        </NavLink>
                    </li>
                    <li className='nav-item p-3'>
                        <NavLink to='/staffOrder' className='text-decoration-none text-white'>
                            <i className='bi bi-people me-3'></i>
                            <span><strong>Orders</strong></span>
                        </NavLink>
                    </li>
                    <li className='nav-item p-3'>
                        <NavLink to='/staffReport' className='text-decoration-none text-white'>
                            <i className='bi bi-people me-3'></i>
                            <span><strong>Report</strong></span>
                        </NavLink>
                    </li>

                </ul>
            </div>
            <hr className='text-secondary' />
            <div className='nav-item p-2'>
                <NavLink to='/login' className='text-decoration-none text-white'>
                    <i className='bi bi-people me-3'></i>
                    <button className='btn btn-outline-success' onClick={() => dispatch(logout())}>Logout</button>
                </NavLink>
            </div>
        </div>
    )
}

export default Sidebar