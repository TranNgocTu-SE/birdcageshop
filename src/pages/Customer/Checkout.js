import React, { useState } from 'react'
import { LC1 } from '../../assets/Index'
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { createOrderRequest } from '../../redux/orderSlice';

const Checkout = () => {

    const [order, setOrder] = useState();
    const navigate = useNavigate();
    const { userInfo } = useSelector((state) => state.auth);
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const handleOnChange = (e) => {
        setOrder({ ...order, [e.target.name]: e.target.value })
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log(order);
        const newOrder = {
            ...order,
            userId: userInfo.userId,
            expectedDeliveryDate: "2023-11-05T13:10:57.617Z",
            totalPrice: cart.cartTotalAmount,
            address: userInfo.address ?? "",
            state: "HCM",
            voucher: "HCM",
            country: "HCM",
            method: "HCM",
            comment: "HCM"

        }
        console.log(newOrder);
        dispatch(createOrderRequest(newOrder));
        navigate("/complete");
    }
    console.log(order);
    return (
        <div>
            <div className='container vh-100'>
                <form onSubmit={handleOnSubmit}>
                    <div className='row my-5'>
                        <div className='col p-5'>
                            <h4>Thông tin giao hàng</h4>

                            <input type="hidden" id="userId" name="userId" value={userInfo?.userId} onChange={handleOnChange} />
                            <div className="form-outline my-3">
                                <input type="text" id="form5Example1" className="form-control" name='username' onChange={handleOnChange} />
                                <label className="form-label" htmlFor="form5Example1">Tên</label>
                            </div>

                            <div className="form-outline mb-3">
                                <input type="text" id="form5Example2" className="form-control" name='phoneNumber' onChange={handleOnChange} />
                                <label className="form-label" htmlFor="form5Example2">Số điện thoại</label>
                            </div>

                            <div className="form-outline mb-3">
                                <input type="text" id="form5Example2" className="form-control" name='address' onChange={handleOnChange} />
                                <label className="form-label" htmlFor="form5Example2">Địa chỉ</label>
                            </div>

                            <h4>Phương thức thanh toán</h4>
                            <div className=''>
                                <div className="form-check py-3 my-3 border border-success">
                                    <input className="form-check-input mx-1" type="radio" name="method" id="flexRadioDefault1" onChange={handleOnChange} value="Thanh toán khi giao hàng (COD)" />
                                    <label className="form-check-label mx-1" htmlFor="flexRadioDefault1">
                                        Thanh toán khi giao hàng (COD)
                                    </label>
                                </div>
                                <div className="form-check py-3 my-3 border border-success">
                                    <input className="form-check-input mx-1" type="radio" name="method" id="flexRadioDefault2" onChange={handleOnChange} value="Chuyển khoản qua ngân hàng" />
                                    <label className="form-check-label mx-1" htmlFor="flexRadioDefault2">
                                        Chuyển khoản qua ngân hàng
                                    </label>
                                </div>
                            </div>

                            <div className='text-end'>
                                <button type='submit' className="btn btn-outline-success mb-3">Hoàn tất đơn hàng</button>
                            </div>
                        </div>

                        <div className='col p-5'>

                            {cart?.cartItems.map((item, index) => (
                                <div className='row d-flex align-items-center my-3' key={index}>
                                    <div className='col-md-2 '>
                                        <img src={LC1} className='img-fluid' />
                                    </div>
                                    <div className='col-md-7'>
                                        {item?.productName}
                                    </div>
                                    <div className='col-md-1'>
                                        x{item?.cartQuantity}
                                    </div>
                                    <div className='col-md-2'>
                                        {item?.price * item?.cartQuantity}
                                    </div>
                                </div>
                            ))}
                            <div className="d-flex justify-content-end my-3 px-2">
                                <input className="me-3" placeholder="Mã giảm giá" aria-label="Search" />
                                <button className="btn btn-outline-success me-0">Sử dụng</button>
                            </div>
                            <div className='row'>
                                <hr />
                            </div>
                            <div className='row text-end my-2'>
                                <div>
                                    <h6>Tổng cộng</h6>
                                </div>
                                <h5 className='mt-2'>{cart.cartTotalAmount}</h5>
                            </div>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default Checkout