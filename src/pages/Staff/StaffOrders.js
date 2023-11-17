import React from 'react'
import Sidebar from './Sidebar'
import Navbar from '../Manager/Navbar'
import { LC1 } from '../../assets/Index'
import { NavLink } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOrderByStaff } from '../../redux/orderSlice'

const StaffOrders = () => {
    const dispatch = useDispatch();
    const { userInfo } = useSelector((state) => state.auth);

    const { listOrderByStaff } = useSelector((state) => state.order);
    const id = userInfo.userId;
    useEffect(() => {
        dispatch(getOrderByStaff("261c96c4-9aac-40f1-b20a-0bbda3c1588d"));
    }, [])
    console.log(userInfo);
    return (
        <div>
            <div className='d-flex'>
                <div className='w-auto'>
                    <Sidebar />
                </div>
                <div className='col'>
                    <div>
                        <Navbar />
                        <div className='container my-5 p-5'>
                            <table className="table text-center">
                                <thead>
                                    <tr>
                                        <th scope="col"></th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="table-group-divider">
                                    {listOrderByStaff?.map((order, index) => (
                                        <tr key={index}>
                                        <th scope="row"></th>
                                        <td>Lồng chim sẻ</td>
                                        <td>X1</td>
                                        <td>1.200.000</td>

                                        <td>
                                            {order?.orderStatus === 1 ? "Pending" : "Processing"}
                                        </td>
                                        <td>
                                            <NavLink to={`/managerOrderDetail/${order.orderId}`} className="btn btn-outline-success me-4"><i className="fa fa-edit me-2"></i>View</NavLink>
                                        </td>
                                    </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default StaffOrders