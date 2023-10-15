import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Home from '../components/Home'
import Pagination from '../components/Pagination'

const AdminDashboard = () => {
    const [toggle, setToggle] = useState(false)
    const Toggle = () => {
        setToggle(!toggle)
    }
    return (
        <div>
            <div className='container-fluid bg-dark min-vh-100'>
                <div className='row'>
                    {toggle && <div className='col-2 bg-white vh-100'>
                        <Sidebar />
                    </div>}
                    <div className='col'>
                        <Home Toggle={Toggle} />
                        
                        <Pagination />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard