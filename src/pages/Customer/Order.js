import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getOrderByCustomer } from '../../redux/orderSlice'

const Order = () => {


    const dispatch = useDispatch();
    const { userInfo } = useSelector((state) => state.auth);
    const { OrderByCustomer } = useSelector((state) => state.order);

    useEffect(() => {
        dispatch(getOrderByCustomer(userInfo.userId));
    }, [])
    

    return (
        <div>
            <div className='container vh-100 mt-5'>
                <table className="table text-center">
                    <thead>
                        <tr>
                            <th scope="col">Order</th>
                            <th scope="col">Customer</th>
                            <th scope="col">Total</th>
                            <th scope="col">Status</th>
                            <th scope="col">Created</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">
                        {OrderByCustomer?.map((order, index) => (
                            <tr key={index}>
                                <td>{order.orderId}</td>
                                <th>{order.userName}</th>
                                <td>{order.totalPrice}</td>
                                <td>
                                    {(() => {
                                        if (order.orderStatus === 1) {
                                            return (
                                                <div>Pending</div>
                                            )
                                        } else if (order.orderStatus === 2) {
                                            return (
                                                <div>Processing</div>
                                            )
                                        } else if (order.orderStatus === 3) {
                                            return (
                                                <div>Shipped</div>
                                            )
                                        }else if (order.orderStatus === 4) {
                                            return (
                                                <div>Delivered</div>
                                            )
                                        }else if (order.orderStatus === 5) {
                                            return (
                                                <div>Cancelled</div>
                                            )
                                        }
                                    })()}
                                </td>
                                <td>{order.orderDate}</td>
                                <td>
                                    <NavLink to={`/orderDetail/${order.orderId}`} className="btn btn-outline-success me-4"><i className="fa fa-edit me-2"></i>View</NavLink>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Order