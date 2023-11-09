import React from 'react'
import Navbar from '../Manager/Navbar'
import Sidebar from './Sidebar'


const HomeStaff = () => {
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

export default HomeStaff