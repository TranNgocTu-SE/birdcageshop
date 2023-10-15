import React from 'react'
import Header from '../components/Header'
import { LC1 } from '../assets/Index'

const ManagerOrder = () => {
    return (
        <div>
            <Header />
            <div className='container my-5'>
                <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Đơn hàng đã đặt</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Đơn hàng đã hủy</button>
                    </li>
                </ul>
                <div class="tab-content" id="pills-tabContent">
                    <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
                        <table class="table text-center">
                            <thead>
                                <tr>
                                    <th scope="col"></th>
                                    <th scope="col">Image</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Action</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Staff</th>
                                    <th scope="col">Task</th>
                                </tr>
                            </thead>
                            <tbody class="table-group-divider">
                                <tr>
                                    <th scope="row">1</th>
                                    <td><img src={LC1} className='img-fluid rounded-3' width="70px" /></td>
                                    <td>Lồng chim sẻ</td>
                                    <td>X1</td>
                                    <td>1.200.000</td>
                                    <td>
                                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Xác nhận</a>
                                        <ul class="dropdown-menu">
                                            <li>
                                                <a class="dropdown-item" href="#">xác nhận</a></li>
                                            <li><a class="dropdown-item" href="#">từ chối</a></li>
                                        </ul>
                                    </td>
                                    <td>Đã nhận</td>
                                    <td>
                                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Nhân viên
                                        </a>
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item" href="#">Nhân viên A</a></li>
                                            <li><a class="dropdown-item" href="#">Nhân viên B</a></li>
                                            <li><a class="dropdown-item" href="#">Nhân viên C</a></li>
                                            <li><a class="dropdown-item" href="#">Nhân viên D</a></li>
                                            <li><a class="dropdown-item" href="#">Nhân viên E</a></li>
                                        </ul>
                                    </td>
                                    <td>Hoàn thành</td>
                                </tr>
                                <tr>
                                    <th scope="row">1</th>
                                    <td><img src={LC1} className='img-fluid rounded-3' width="70px" /></td>
                                    <td>Lồng chim sẻ</td>
                                    <td>X1</td>
                                    <td>1.200.000</td>
                                    <td>
                                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Xác nhận</a>
                                        <ul class="dropdown-menu">
                                            <li>
                                                <a class="dropdown-item" href="#">xác nhận</a></li>
                                            <li><a class="dropdown-item" href="#">từ chối</a></li>
                                        </ul>
                                    </td>
                                    <td>Đã hủy</td>
                                    <td>
                                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Nhân viên
                                        </a>
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item" href="#">Nhân viên A</a></li>
                                            <li><a class="dropdown-item" href="#">Nhân viên B</a></li>
                                            <li><a class="dropdown-item" href="#">Nhân viên C</a></li>
                                            <li><a class="dropdown-item" href="#">Nhân viên D</a></li>
                                            <li><a class="dropdown-item" href="#">Nhân viên E</a></li>
                                        </ul>
                                    </td>
                                    <td>Hoàn thành</td>
                                </tr>
                                <tr>
                                    <th scope="row">1</th>
                                    <td><img src={LC1} className='img-fluid rounded-3' width="70px" /></td>
                                    <td>Lồng chim sẻ</td>
                                    <td>X1</td>
                                    <td>1.200.000</td>
                                    <td>
                                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Xác nhận</a>
                                        <ul class="dropdown-menu">
                                            <li>
                                                <a class="dropdown-item" href="#">xác nhận</a></li>
                                            <li><a class="dropdown-item" href="#">từ chối</a></li>
                                        </ul>
                                    </td>
                                    <td>
                                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Nhân viên
                                        </a>
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item" href="#">Nhân viên A</a></li>
                                            <li><a class="dropdown-item" href="#">Nhân viên B</a></li>
                                            <li><a class="dropdown-item" href="#">Nhân viên C</a></li>
                                            <li><a class="dropdown-item" href="#">Nhân viên D</a></li>
                                            <li><a class="dropdown-item" href="#">Nhân viên E</a></li>
                                        </ul>
                                    </td>
                                    <td>
                                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Nhân viên
                                        </a>
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item" href="#">Nhân viên A</a></li>
                                            <li><a class="dropdown-item" href="#">Nhân viên B</a></li>
                                            <li><a class="dropdown-item" href="#">Nhân viên C</a></li>
                                            <li><a class="dropdown-item" href="#">Nhân viên D</a></li>
                                            <li><a class="dropdown-item" href="#">Nhân viên E</a></li>
                                        </ul>
                                    </td>
                                    <td>Hoàn thành</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">
                        <table class="table text-center">
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
                            <tbody class="table-group-divider">
                                <tr>
                                    <th scope="row">1</th>
                                    <td><img src={LC1} className='img-fluid rounded-3' width="70px" /></td>
                                    <td>Lồng chim sẻ</td>
                                    <td>X1</td>
                                    <td>1.200.000</td>
                                    <td>Thay đổi quyết định mua hàng</td>
                                    <td>
                                        <button className='btn btn-outline-success me-2'>xác nhận</button>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">1</th>
                                    <td><img src={LC1} className='img-fluid rounded-3' width="70px" /></td>
                                    <td>Lồng chim sẻ</td>
                                    <td>X1</td>
                                    <td>1.200.000</td>
                                    <td>Thay đổi quyết định mua hàng</td>
                                    <td>
                                        <button className='btn btn-outline-success me-2'>xác nhận</button>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">1</th>
                                    <td><img src={LC1} className='img-fluid rounded-3' width="70px" /></td>
                                    <td>Lồng chim sẻ</td>
                                    <td>X1</td>
                                    <td>1.200.000</td>
                                    <td>Thay đổi quyết định mua hàng</td>
                                    <td>
                                        <button className='btn btn-outline-success me-2'>xác nhận</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ManagerOrder