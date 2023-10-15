import React from 'react'
import { LC1 } from '../assets/Index'
import { NavLink } from 'react-router-dom'

const Checkout = () => {
    return (
        <div>
            <div className='container vh-100'>
                <div className='row my-5'>
                    <div className='col p-5'>
                        <h4>Thông tin giao hàng</h4>
                        <form>
                            <div className="form-outline my-3">
                                <input type="text" id="form5Example1" className="form-control" />
                                <label className="form-label" for="form5Example1">Tên</label>
                            </div>

                            <div className="form-outline mb-3">
                                <input type="number" id="form5Example2" className="form-control" />
                                <label className="form-label" for="form5Example2">Số điện thoại</label>
                            </div>

                            <div className="form-outline mb-3">
                                <input type="text" id="form5Example2" className="form-control" />
                                <label className="form-label" for="form5Example2">Địa chỉ</label>
                            </div>

                            <h4>Phương thức thanh toán</h4>
                            <div className=''>

                                <div className="form-check py-3 my-3 border border-success">
                                    <input className="form-check-input mx-1" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                    <label className="form-check-label mx-1" for="flexRadioDefault1">
                                        Thanh toán khi giao hàng (COD)
                                    </label>
                                </div>
                                <div className="form-check py-3 my-3 border border-success">
                                    <input className="form-check-input mx-1" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                    <label className="form-check-label mx-1" for="flexRadioDefault2">
                                        Chuyển khoản qua ngân hàng
                                    </label>
                                </div>
                            </div>

                            <div className='text-end'>
                                <NavLink to='/complete' type='submit' className="btn btn-outline-success mb-3">Hoàn tất đơn hàng</NavLink>
                            </div>
                        </form>
                    </div>

                    <div className='col p-5'>
                        <div className='row d-flex align-items-center my-3'>
                            <div className='col-md-2 '>
                                <img src={LC1} className='img-fluid' />
                            </div>
                            <div className='col-md-8'>
                                Lồng chim sáo
                            </div>
                            <div className='col-md-2'>
                                1.200.000VND
                            </div>
                        </div>
                        <div className='row d-flex align-items-center my-3'>
                            <div className='col-md-2 '>
                                <img src={LC1} className='img-fluid' />
                            </div>
                            <div className='col-md-8'>
                                Lồng chim sáo
                            </div>
                            <div className='col-md-2'>
                                1.200.000VND
                            </div>
                        </div>
                        <div className="d-flex justify-content-end my-3 px-2">
                            <input className="me-3"  placeholder="Mã giảm giá" aria-label="Search" />
                            <button className="btn btn-outline-success me-0">Sử dụng</button>
                        </div>
                        <div className='row'>
                            <hr/>
                        </div>
                        <div className='row text-end my-2'>
                            <div>
                            <h6>Tổng cộng</h6>
                            </div>
                            <h5 className='mt-2'>2.400.000VND</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout