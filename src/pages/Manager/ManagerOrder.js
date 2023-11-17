import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { assignForStaff, getOrders, updateOrderStatus } from '../../redux/orderSlice';
import { LC1 } from '../../assets/Index';
import { NavLink } from 'react-router-dom';

const ManagerOrder = () => {

    const { listOrders } = useSelector((state) => state.order);
    const { listUser } = useSelector((state) => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getOrders());
    }, [])


    const handleOnChange = (e) => {
        return e.target.value;
    }

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
                    <div className='container my-5'>
                        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="pills-order1-tab" data-bs-toggle="pill" data-bs-target="#pills-order1" type="button" role="tab" aria-controls="pills-order1" aria-selected="true">Đơn hàng đang chờ</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="pills-order2-tab" data-bs-toggle="pill" data-bs-target="#pills-order2" type="button" role="tab" aria-controls="pills-order2" aria-selected="false">Đơn hàng đã hủy</button>
                            </li><li className="nav-item" role="presentation">
                                <button className="nav-link" id="pills-order3-tab" data-bs-toggle="pill" data-bs-target="#pills-order3" type="button" role="tab" aria-controls="pills-order3" aria-selected="false">Đơn hàng đã đặt</button>
                            </li>
                        </ul>
                        <div className="tab-content" id="pills-tabContent">
                            <div className="tab-pane fade show active" id="pills-order1" role="tabpanel" aria-labelledby="pills-order1-tab" tabIndex="0">
                                <table className="table text-center">
                                    <thead>
                                        <tr>
                                            <th scope="col"></th>
                                            <th scope="col">Id</th>
                                            <th scope="col">Time</th>
                                            <th scope="col">Price</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className="table-group-divider">
                                        {listOrders?.filter((e) => e.orderStatus === 1).map((order, index) => (
                                            <tr key={index}>
                                                <th scope="row"></th>
                                                <td>{order.orderId}</td>
                                                <td>{order.orderDate}</td>
                                                <td>{order.totalPrice}</td>

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
                            <div className="tab-pane fade" id="pills-order2" role="tabpanel" aria-labelledby="pills-order2-tab" tabIndex="0">
                                <table className="table text-center">
                                    <thead>
                                        <tr>
                                            <th scope="col"></th>
                                            <th scope="col">Image</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Quantity</th>
                                            <th scope="col">Price</th>
                                            <th scope="col">Description</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className="table-group-divider">
                                        {listOrders?.filter((e) => e.orderStatus === 5).map((order, index) => (
                                            <tr key={index}>
                                                <th scope="row">1</th>
                                                <td><img src={LC1} className='img-fluid rounded-3' width="70px" /></td>
                                                <td>Lồng chim sẻ</td>
                                                <td>X1</td>
                                                <td>{order.totalPrice}</td>
                                                <td>{order.orderStatus}</td>
                                                <td>
                                                    <button className='btn btn-outline-success me-2'>xác nhận</button>
                                                </td>
                                            </tr>
                                        ))}

                                    </tbody>
                                </table>
                            </div>
                            <div className="tab-pane fade" id="pills-order3" role="tabpanel" aria-labelledby="pills-order3-tab" tabIndex="0">
                                <table className="table text-center">
                                    <thead>
                                        <tr>
                                            <th scope="col"></th>
                                            <th scope="col">Id</th>
                                            <th scope="col">Date</th>
                                            <th scope="col">Price</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Task</th>
                                        </tr>
                                    </thead>
                                    <tbody className="table-group-divider">
                                        {listOrders?.filter((e) => e.orderStatus === 2).map((order, index) => (
                                            <tr key={index}>
                                                <th scope="row">1</th>
                                                <td>{order.orderId}</td>
                                                <td>{order.orderDate}</td>
                                                <td>{order.totalPrice}</td>
                                                <td>Đã đặt</td>
                                                <td>
                                                    <select className="form-select" id="inlineFormSelectPref" defaultValue={order.assignedEmp} onChange={(e) => dispatch(assignForStaff({ orderId: order.orderId, userId: e.target.value }))}>
                                                        <option defaultValue={1}>Nhân viên</option>
                                                        {listUser?.filter((e) => e.roleId === 2).map((user, index) => (
                                                            <option value={user.userId} key={index}>{user.username}</option>
                                                        ))}
                                                    </select>
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
        </div>

    )
}

export default ManagerOrder