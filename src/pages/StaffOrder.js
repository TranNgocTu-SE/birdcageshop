import React from 'react'
import Header from '../components/Header'
import { LC1 } from '../assets/Index'
import { NavLink } from 'react-router-dom'

const StaffOrder = () => {
    return (
        <div>
            <Header />
            <div className='container my-5'>
                <table class="table text-center">
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">Image</th>
                            <th scope="col">Name</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Price</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody class="table-group-divider">
                        <tr>
                            <th scope="row">1</th>
                            <td><img src={LC1} className='img-fluid rounded-3' width="70px" /></td>
                            <td>
                                <NavLink to="/orderDetail" className="text-decoration-none">Lồng chim sẻ</NavLink>
                            </td>
                            <td>X1</td>
                            <td>1.200.000</td>
                            <td>
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Hoàn thành</a>
                                <ul class="dropdown-menu">
                                    <li>
                                        <a class="dropdown-item" href="#">Đang làm</a></li>
                                    <li><a class="dropdown-item" href="#">Hủy</a></li>
                                    <li><a class="dropdown-item" href="#">Hoàn thành</a></li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td><img src={LC1} className='img-fluid rounded-3' width="70px" /></td>
                            <td>
                            <NavLink to="/orderDetail" className="text-decoration-none">Lồng chim chào mào</NavLink>
                            </td>
                            <td>X1</td>
                            <td>1.200.000</td>
                            <td>
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Hoàn thành</a>
                                <ul class="dropdown-menu">
                                    <li>
                                        <a class="dropdown-item" href="#">Đang làm</a></li>
                                    <li><a class="dropdown-item" href="#">Hủy</a></li>
                                    <li><a class="dropdown-item" href="#">Hoàn thành</a></li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td><img src={LC1} className='img-fluid rounded-3' width="70px" /></td>
                            <td>
                            <NavLink to="/orderDetail" className="text-decoration-none">Lồng chim khuyên</NavLink>
                            </td>
                            <td>X1</td>
                            <td>1.200.000</td>
                            <td>
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Đang làm</a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Hoàn thành</a></li>
                                    <li><a class="dropdown-item" href="#">Hủy</a></li>
                                    <li><a class="dropdown-item" href="#">Đang làm</a></li>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default StaffOrder