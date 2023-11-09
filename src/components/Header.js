import React from 'react'
import { Logo } from '../assets/Index'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../redux/authSlice'
import { useEffect } from 'react'
import { getCategories } from '../redux/categorySlice'

const Header = () => {

    const dispatch = useDispatch();

    const { cartTotalQuantity } = useSelector(state => state.cart);

    const { userInfo } = useSelector(state => state.auth);
    const { categories } = useSelector(state => state.category);

    useEffect(() => {
        dispatch(getCategories());
    }, [])
    return (
        <div>
            <div className='header bg-dark'>
                <div className='container text-light pt-3'>
                    <div className="row">
                        <div className="col-md-8 fs-3">
                            <img src={Logo} alt='Logo' width="60px" className='rounded-circle me-3' />
                            Thế giới lồng chim
                        </div>
                        <div className='col-md-4  text-end'>
                            <div className='row'>
                                <div className="col">
                                    <i className="bi bi-bell me-1"></i>
                                    Thông báo
                                </div>

                                {userInfo ?
                                    (<div className='col'>
                                        <NavLink to="/login" className='text-decoration-none text-white' onClick={() => dispatch(logout())}><i className="bi bi-box-arrow-in-right me-2"></i>Logout</NavLink>
                                    </div>) :
                                    (
                                        <div className='col'>
                                            <NavLink to="/login" className='text-decoration-none text-white'><i className="bi bi-box-arrow-in-right me-2"></i>Đăng nhập</NavLink>
                                        </div>)
                                }

                            </div>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col">
                            <nav className="navbar navbar-expand-md text-success navbar-dark">
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                                        <li className="nav-item">
                                            <NavLink to="/" className="nav-link active " aria-current="page" style={{ color: "white", textDecoration: "none", marginRight: "15px" }} >Trang chủ</NavLink>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <NavLink className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: "white", textDecoration: "none", marginRight: "15px" }} >
                                                Mẫu lồng
                                            </NavLink>
                                            <ul className="dropdown-menu">
                                                {categories?.map((category, index) => (
                                                    <li key={index}>
                                                        <NavLink to={`/listProducts/${category.birdTypeId}`} className="dropdown-item text-decoration-none" >{category.name}</NavLink>
                                                    </li>
                                                ))}

                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/makeBirdCage" style={{ color: "white", textDecoration: "none", marginRight: "15px" }}>Đặt lồng</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/order" style={{ color: "white", textDecoration: "none", marginRight: "15px" }}>Đơn hàng</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" href="#" style={{ color: "white", textDecoration: "none", marginRight: "15px" }}>Giới thiệu</NavLink>
                                        </li>
                                    </ul>
                                    <form className="d-flex" role="search">
                                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                        <button className="btn btn-outline-light" type="submit">Search</button>
                                    </form>
                                    <NavLink to="/shoppingCart" className="position-relative mx-4 text-light text-decoration-none"><i className="bi bi-cart fs-4"></i>
                                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                            {cartTotalQuantity}
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