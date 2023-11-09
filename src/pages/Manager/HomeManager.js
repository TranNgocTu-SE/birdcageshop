import React, { useEffect } from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import { useDispatch } from 'react-redux';
import { getAllUser } from '../../redux/userSlice';
import { getCategories } from '../../redux/categorySlice';

const HomeManager = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllUser());
    }, [])

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

export default HomeManager