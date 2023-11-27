import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOrderDetailByOrder, updateOrderStatus } from '../../redux/orderSlice';
import { LC2 } from '../../assets/Index';

const ManagerOrderDetail = () => {

    const { id } = useParams();
    const dispatch = useDispatch();
    const { OrderDetailByOrder } = useSelector((state) => state.order);
    const cart = useSelector((state) => state.cart);

    useEffect(() => {
        dispatch(getOrderDetailByOrder(id));
    }, [])

    return (
        <div className='row'>
            <div className="h-100 ">
                <div className="container py-2 ">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col">
                            <div className="card rounded-4" >
                                <div className="card-header px-4 py-3">
                                    <h5 className="text-dark mb-0"><span style={{ color: "#a8729a" }}>Products</span></h5>
                                </div>
                                <div className="card-body p-4">
                                    <div className="d-flex justify-content-between align-items-center mb-2">
                                        <p className="lead fw-normal mb-0" style={{ color: "#a8729a" }}>Receipt</p>
                                        <p className="small text-dark mb-0">Receipt Voucher : {id}</p>
                                    </div>
                                    <div className="card shadow-0 border">
                                        {OrderDetailByOrder?.map((orderDetail, index) => (
                                            <div className="card-body" key={index}>
                                                <div className="row">
                                                    <div className="col-md-2">
                                                        <img src={orderDetail.image}
                                                            className="img-fluid" alt="Phone" style={{width:"100px",height:"140px"}}/>
                                                    </div>
                                                    <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                                                        <p className="text-dark mb-0 small">{orderDetail.productName}</p>
                                                    </div>
                                                    <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                                                        <p className="text-dark mb-0 small">{orderDetail.price}</p>
                                                    </div>
                                                    <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                                                        <p className="text-dark mb-0 small">Qty: {orderDetail.quantity}</p>
                                                    </div>
                                                    <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                                                        <p className="text-dark mb-0 small">{orderDetail.price * orderDetail.quantity}</p>
                                                    </div>
                                                </div>
                                                <hr className="mb-4" style={{ backgroundColor: "#e0e0e0", opacity: "1" }} />
                                            </div>
                                        ))}

                                    </div>
                                    <div className="d-flex justify-content-between pt-2">
                                        <p className="fw-bold mb-0">Order Details</p>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <p className="text-dark mb-0">Invoice Number : 788152</p>
                                        <p className="text-dark mb-0"><span className="fw-bold me-4">Total</span> {cart.cartTotalAmount}</p>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <p className="text-dark mb-0">Invoice Date : 22 Dec,2019</p>
                                        <p className="text-dark mb-0"><span className="fw-bold me-4">Discount</span>0</p>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <p className="text-dark mb-0">Recepits Voucher : 18KU-62IIK</p>
                                        <p className="text-dark mb-0"><span className="fw-bold me-4">Delivery</span> Free</p>
                                    </div>
                                </div>
                                <hr className="mb-4" style={{ backgroundColor: "#e0e0e0", opacity: "1" }} />
                                <div className="border-0 px-4 py-3 rounded-bottom-4">
                                    <h5 className="d-flex align-items-center justify-content-end text-uppercase mb-0">Total
                                        paid: <span className="h2 mb-0 ms-2">{cart.cartTotalAmount}</span></h5>
                                    <div className='text-end mt-4'>
                                        <button className='btn btn-outline-success me-3' onClick={() => dispatch(updateOrderStatus({ orderId: id, orderStatus: "Processing" }))}>Chấp nhận</button>
                                        <button className='btn btn-outline-danger' onClick={() => dispatch(updateOrderStatus({ orderId: id, orderStatus: "Cancelled" }))}>Từ chối</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ManagerOrderDetail