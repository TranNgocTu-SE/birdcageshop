import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div>
        <div className='bg-white p-2'>
            <div className='m-2'>
                <i className='bi bi-bootstrap-fill me-2 fs-4'></i>
                <span className='brand-name fs-4'>Admin</span>
            </div>

            <hr className='text-dark'/>
            <div className='list-group list-group-flush'>
                <div className='list-group-item py-2'>
                    <i className='bi bi-speedometer2 fs-5 me-2'></i>
                    <NavLink to="/adminDashboard" className=" fs-4 text-center text-decoration-none text-dark">Dashboard</NavLink>
                </div>
                <div className='list-group-item py-2'>
                    <i className='bi bi-house fs-5 me-2'></i>
                    <NavLink to="/adminDashboard" className="fs-5 text-center text-decoration-none text-dark">Manager</NavLink>
                </div>
                <div className='list-group-item py-2'>
                    <i className='bi bi-house fs-5 me-2'></i>
                    <NavLink to="/adminDashboard" className="fs-5 text-center text-decoration-none text-dark">Staff</NavLink>
                </div>
                <div className='list-group-item py-2'>
                    <i className='bi bi-house fs-5 me-2'></i>
                    <NavLink to="/adminDashboard" className="fs-5 text-center text-decoration-none text-dark">Customer</NavLink>
                </div>
                <div className='list-group-item py-2'>
                    <i className='bi bi-house fs-5 me-2'></i>
                    <NavLink to="/profile" className="fs-5 text-center text-decoration-none text-dark">Profile</NavLink>
                </div>
                <div className='list-group-item py-2'>
                    <i className='bi bi-house fs-5 me-2'></i>
                    <NavLink to="/login" className="fs-5 text-center text-decoration-none text-dark">Logout</NavLink>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Sidebar