import React from 'react'
import Sidebar from './Sidebar'
import Navbar from '../Manager/Navbar'


const StaffReport = () => {
    return (
        <div>
            <div className='d-flex'>
                <div className='w-auto'>
                    <Sidebar />
                </div>
                <div className='col'>
                    <div>
                        <Navbar />
                        <div className='container-fluid'>
                            Thống kê
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default StaffReport