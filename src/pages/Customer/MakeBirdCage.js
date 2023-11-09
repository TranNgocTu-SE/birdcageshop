import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { LC6 } from '../../assets/Index'
import { NavLink } from 'react-router-dom'

const MakeBirdCage = () => {
    return (
        <div>
            <Header />
            <div className='container d-flex flex-column min-vh-100 mt-4'>
                <div>
                    <button className='btn btn-outline-success'>Thông tin lồng</button>
                </div>
                <div className='row'>
                    <div className='col-md-2'>
                    </div>
                    <div className='col-md-8'>
                        <div className='my-3'>
                            <div className='row border'>
                                <div className='col-md-2  '>
                                    <div className="mt-5">Khung lồng</div>
                                </div>
                                <div className='col-md-2 mt-5'>
                                    <div className="dropdown ">
                                        <button className="btn btn-outline-success dropdown-toggle" type="button" data-bs-toggle="dropdown">
                                            Hình dạng
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='col-md-2 mt-5'>
                                    <div className="dropdown ">
                                        <button className="btn btn-outline-success dropdown-toggle" type="button" data-bs-toggle="dropdown">
                                            Kích thước
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='col-md-2 mt-5'>
                                    <div className="dropdown ">
                                        <button className="btn btn-outline-success dropdown-toggle" type="button" data-bs-toggle="dropdown">
                                            Chất liệu
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='col-md-2 mt-5'>
                                    <div className="dropdown ">
                                        <button className="btn btn-outline-success dropdown-toggle" type="button" data-bs-toggle="dropdown">
                                            Màu sắc
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='col-md-2 p-2'>
                                    <img src={LC6} width="80px" height="120px" />
                                </div>
                            </div>
                            <div className='row border'>
                                <div className='col-md-2  '>
                                    <div className="mt-5">Khung lồng</div>
                                </div>
                                <div className='col-md-2 mt-5'>
                                    <div className="dropdown ">
                                        <button className="btn btn-outline-success dropdown-toggle" type="button" data-bs-toggle="dropdown">
                                            Hình dạng
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='col-md-2 mt-5'>
                                    <div className="dropdown ">
                                        <button className="btn btn-outline-success dropdown-toggle" type="button" data-bs-toggle="dropdown">
                                            Kích thước
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='col-md-2 mt-5'>
                                    <div className="dropdown ">
                                        <button className="btn btn-outline-success dropdown-toggle" type="button" data-bs-toggle="dropdown">
                                            Chất liệu
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='col-md-2 mt-5'>
                                    <div className="dropdown ">
                                        <button className="btn btn-outline-success dropdown-toggle" type="button" data-bs-toggle="dropdown">
                                            Màu sắc
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='col-md-2 p-2'>
                                    <img src={LC6} width="80px" height="120px" />
                                </div>
                            </div>
                            <div className='row border'>
                                <div className='col-md-2  '>
                                    <div className="mt-5">Khung lồng</div>
                                </div>
                                <div className='col-md-2 mt-5'>
                                    <div className="dropdown ">
                                        <button className="btn btn-outline-success dropdown-toggle" type="button" data-bs-toggle="dropdown">
                                            Hình dạng
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='col-md-2 mt-5'>
                                    <div className="dropdown ">
                                        <button className="btn btn-outline-success dropdown-toggle" type="button" data-bs-toggle="dropdown">
                                            Kích thước
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='col-md-2 mt-5'>
                                    <div className="dropdown ">
                                        <button className="btn btn-outline-success dropdown-toggle" type="button" data-bs-toggle="dropdown">
                                            Chất liệu
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='col-md-2 mt-5'>
                                    <div className="dropdown ">
                                        <button className="btn btn-outline-success dropdown-toggle" type="button" data-bs-toggle="dropdown">
                                            Màu sắc
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='col-md-2 p-2'>
                                    <img src={LC6} width="80px" height="120px" />
                                </div>
                            </div>
                            <div className='row border'>
                                <div className='col-md-2  '>
                                    <div className="mt-5">Khung lồng</div>
                                </div>
                                <div className='col-md-2 mt-5'>
                                    <div className="dropdown ">
                                        <button className="btn btn-outline-success dropdown-toggle" type="button" data-bs-toggle="dropdown">
                                            Hình dạng
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='col-md-2 mt-5'>
                                    <div className="dropdown ">
                                        <button className="btn btn-outline-success dropdown-toggle" type="button" data-bs-toggle="dropdown">
                                            Kích thước
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='col-md-2 mt-5'>
                                    <div className="dropdown ">
                                        <button className="btn btn-outline-success dropdown-toggle" type="button" data-bs-toggle="dropdown">
                                            Chất liệu
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='col-md-2 mt-5'>
                                    <div className="dropdown ">
                                        <button className="btn btn-outline-success dropdown-toggle" type="button" data-bs-toggle="dropdown">
                                            Màu sắc
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='col-md-2 p-2'>
                                    <img src={LC6} width="80px" height="120px" />
                                </div>
                            </div>
                            <div className='row border'>
                                <div className='col-md-2  '>
                                    <div className="mt-5">Khung lồng</div>
                                </div>
                                <div className='col-md-2 mt-5'>
                                    <div className="dropdown ">
                                        <button className="btn btn-outline-success dropdown-toggle" type="button" data-bs-toggle="dropdown">
                                            Hình dạng
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='col-md-2 mt-5'>
                                    <div className="dropdown ">
                                        <button className="btn btn-outline-success dropdown-toggle" type="button" data-bs-toggle="dropdown">
                                            Kích thước
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='col-md-2 mt-5'>
                                    <div className="dropdown ">
                                        <button className="btn btn-outline-success dropdown-toggle" type="button" data-bs-toggle="dropdown">
                                            Chất liệu
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='col-md-2 mt-5'>
                                    <div className="dropdown ">
                                        <button className="btn btn-outline-success dropdown-toggle" type="button" data-bs-toggle="dropdown">
                                            Màu sắc
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='col-md-2 p-2'>
                                    <img src={LC6} width="80px" height="120px" />
                                </div>
                            </div>
                            <div className='row border'>
                                <div className='col-md-2  '>
                                    <div className="mt-5">Khung lồng</div>
                                </div>
                                <div className='col-md-2 mt-5'>
                                    <div className="dropdown ">
                                        <button className="btn btn-outline-success dropdown-toggle" type="button" data-bs-toggle="dropdown">
                                            Hình dạng
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='col-md-2 mt-5'>
                                    <div className="dropdown ">
                                        <button className="btn btn-outline-success dropdown-toggle" type="button" data-bs-toggle="dropdown">
                                            Kích thước
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='col-md-2 mt-5'>
                                    <div className="dropdown ">
                                        <button className="btn btn-outline-success dropdown-toggle" type="button" data-bs-toggle="dropdown">
                                            Chất liệu
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='col-md-2 mt-5'>
                                    <div className="dropdown ">
                                        <button className="btn btn-outline-success dropdown-toggle" type="button" data-bs-toggle="dropdown">
                                            Màu sắc
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='col-md-2 p-2'>
                                    <img src={LC6} width="80px" height="120px" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-2'>
                </div>
                <div>
                <NavLink to="/shoppingCart" className='btn btn-outline-success mb-3 pull-right'>Thêm vào giỏ hàng</NavLink>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default MakeBirdCage