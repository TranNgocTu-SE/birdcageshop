import React from 'react'
import { Logo } from '../assets/Index'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <div className='header bg-dark'>
                <div className='container text-light pt-3'>
                    <div class="row">
                        <div class="col-md-8 fs-3">
                            <img src={Logo} alt='Logo' width="60px" className='rounded-circle me-3' />
                            Thế giới lồng chim
                        </div>
                        <div className='col-md-4  text-end'>
                            <div className='row'>
                                <div class="col">
                                    <i class="bi bi-bell me-1"></i>
                                    Thông báo
                                </div>
                                <div className='col'>
                                    <NavLink to="/register" className='text-decoration-none text-white'><i class="bi bi-r-square me-2"></i>Đăng ký</NavLink>
                                </div>
                                <div className='col'>
                                    <NavLink to="/login" className='text-decoration-none text-white'><i class="bi bi-box-arrow-in-right me-2"></i>Đăng nhập</NavLink>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div class="row">
                        <div class="col">
                            <nav class="navbar navbar-expand-md text-success navbar-dark">
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse " id="navbarSupportedContent">
                                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
                                        <li class="nav-item">
                                            <NavLink to="/" class="nav-link active " aria-current="page" style={{ color: "white", textDecoration: "none", marginRight: "15px" }} >Trang chủ</NavLink>
                                        </li>
                                        <li class="nav-item dropdown">
                                            <NavLink class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: "white", textDecoration: "none", marginRight: "15px" }} >
                                                Mẫu lồng
                                            </NavLink>
                                            <ul class="dropdown-menu">
                                                <li><NavLink to="/listProducts" className="dropdown-item text-decoration-none" >Lồng chim khuyên</NavLink></li>
                                                <li><a class="dropdown-item" href="#">Lồng chào mào</a></li>
                                                <li><a class="dropdown-item" href="#">Lồng chim họa mi</a></li>
                                                <li><a class="dropdown-item" href="#">Lồng chim cu gáy</a></li>
                                                <li><a class="dropdown-item" href="#">Lồng chim họa mi</a></li>
                                                <li><a class="dropdown-item" href="#">Lồng chim sơn ca</a></li>
                                                <li><a class="dropdown-item" href="#">Phụ kiện lồng chim</a></li>
                                            </ul>
                                        </li>
                                        <li class="nav-item">
                                            <NavLink class="nav-link" to="/makeBirdCage" style={{ color: "white", textDecoration: "none", marginRight: "15px" }}>Đặt lồng</NavLink>
                                        </li>
                                        <li class="nav-item">
                                            <NavLink class="nav-link" to="/order" style={{ color: "white", textDecoration: "none", marginRight: "15px" }}>Đơn hàng</NavLink>
                                        </li>
                                        <li class="nav-item">
                                            <NavLink class="nav-link" href="#" style={{ color: "white", textDecoration: "none", marginRight: "15px" }}>Giới thiệu</NavLink>
                                        </li>
                                    </ul>
                                    <form class="d-flex" role="search">
                                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                        <button class="btn btn-outline-light" type="submit">Search</button>
                                    </form>
                                    <NavLink to="/shoppingCart" className="position-relative mx-4 text-light text-decoration-none"><i class="bi bi-cart fs-4"></i>
                                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                            0
                                        </span>
                                    </NavLink>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header