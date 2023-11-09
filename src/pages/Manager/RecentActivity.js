import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'


const RecentActivity = () => {
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
                            Recent ACtivity
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecentActivity