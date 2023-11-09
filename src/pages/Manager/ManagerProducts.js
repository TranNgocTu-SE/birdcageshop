import React from 'react'
import { LC1, LC2, LC3, LC4, LC5, LC6, LC7, LC8 } from '../../assets/Index'
import { NavLink } from 'react-router-dom'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import Pagination from '../../components/Pagination'
import ListProducts from './ListProducts'

const ManagerProducts = () => {

    return (
        <div>
            <div className='d-flex'>
                <div className='w-auto'>
                    <Sidebar />
                </div>
                <div className='col'>
                    <div>
                        <Navbar />
                    </div>
                    <div className='container text-end pt-5 px-5'>
                        <NavLink to="/addProduct" className="btn btn-outline-success"><i className="bi bi-plus-square me-2"></i>Add</NavLink>
                    </div>
                   <ListProducts />
                </div>
            </div>
        </div>


    )
}

export default ManagerProducts