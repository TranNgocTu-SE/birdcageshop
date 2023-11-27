import React, { useEffect } from 'react'
import { getOrder, getOrderDetailByOrder } from '../../redux/orderSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

const OrderDetail = () => {

    const { id } = useParams();
    const dispatch = useDispatch();
    const { OrderDetailByOrder, order } = useSelector((state) => state.order);
    const [total, setTotal] = useState();
    const x = 0;
    useEffect(() => {
        dispatch(getOrderDetailByOrder(id));
        dispatch(getOrder(id));
    }, [])

    return (
        <div className="container py-5 ">
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col">
                    <div className="card rounded-4" >
                        <div className="card-header px-4 py-3">
                            <h5 className="text-dark mb-0"><span style={{ color: "green" }}>Products</span></h5>
                        </div>
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-center">
                                <p className="fw-normal" style={{ color: "green" }}>Voucher : None</p>
                            </div>
                            <div className="card shadow-0 border">
                                {OrderDetailByOrder?.map((orderDetail, index) => (
                                    <div className="card-body" style={{margin:"0"}} key={index}>
                                        <div className="row">
                                            <div className="col-md-2">
                                                <img src={orderDetail.image}
                                                    className="img-fluid" alt="Phone" style={{ width: "100px", height: "140px" }} />
                                            </div>
                                            <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                                                <div className="text-dark mb-0 small">{orderDetail.productName}</div>
                                            </div>
                                            <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                                                <p className="text-dark mb-0 small">Price: {orderDetail.price}</p>
                                            </div>
                                            <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                                                <p className="text-dark mb-0 small">Quantity: {orderDetail.quantity}</p>
                                            </div>
                                            <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                                                <p className="text-dark mb-0 small">Total: {orderDetail.price * orderDetail.quantity}</p>
                                            </div>
                                            <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                                                <p className="text-dark mb-0 small">
                                                    {order.orderStatus === 4 ? <NavLink to={`/review/${orderDetail.productId}`} className="btn btn-outline-success me-4"><i className="fa fa-edit me-2"></i>Rate</NavLink> : <div></div>}
                                                </p>
                                            </div>
                                        </div>
                                        <hr className="mb-0" style={{ backgroundColor: "#e0e0e0", opacity: "1" }} />
                                    </div>
                                ))}

                            </div>
                            <div className="row mt-4">
                                <p className="fw-bold">Order Details</p>
                                <div className='col-2'>
                                    <p className="fw-bold">Invoice Number :</p>
                                    <p className="fw-bold">Invoice Date : </p>
                                    <p className="fw-bold">Discount:</p>
                                    <p className="fw-bold">Delivery:</p>
                                    <p className="fw-bold">Total:</p>
                                </div>
                                <div className='col'>
                                    <p className="text-dark">{order.orderId}</p>
                                    <p className="text-dark">{order.orderDate}</p>
                                    <p className="text-dark">None</p>
                                    <p className="text-dark">Free</p>
                                    <p className="text-dark">{order.totalPrice}</p>
                                </div>
                            </div>
                        </div>
                        {/* <hr className="mb-4" style={{ backgroundColor: "#e0e0e0", opacity: "1" }} /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderDetail