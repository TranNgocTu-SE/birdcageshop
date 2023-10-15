import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { LC2 } from '../assets/Index'
import { NavLink } from 'react-router-dom'

const Order = () => {
    return (
        <div>
            <Header />
            <div className='container vh-100 mt-5'>
                <table class="table table-striped text-center">
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">Ảnh</th>
                            <th scope="col">Tên</th>
                            <th scope="col">Miêu tả</th>
                            <th scope="col">Số lượng</th>
                            <th scope="col">Giá</th>
                            <th scope="col">Thời gian</th>
                            <th scope="col">Trạng thái</th>
                            <th scope="col">Đánh giá</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td><img src={LC2} style={{width:"60px",height:"80px"}}/></td>
                            <td>Lồng chim sẻ</td>
                            <td>gỗ trúc màu vàng sang trọng</td>
                            <td>1</td>
                            <td>1.200.000</td>
                            <td>12:00 10/9/2023</td>
                            <td>Đã giao</td>
                            <td><NavLink to="/review"><i class="bi bi-star"></i><i class="bi bi-star"></i><i class="bi bi-star"></i><i class="bi bi-star"></i><i class="bi bi-star"></i></NavLink></td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td><img src={LC2} style={{width:"60px",height:"80px"}}/></td>
                            <td>Lồng chim sẻ</td>
                            <td>gỗ trúc màu vàng sang trọng</td>
                            <td>1</td>
                            <td>1.200.000</td>
                            <td>12:00 10/9/2023</td>
                            <td>Đã hủy</td>
                            <td>Đã hủy</td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td><img src={LC2} style={{width:"60px",height:"80px"}}/></td>
                            <td>Lồng chim sẻ</td>
                            <td>gỗ trúc màu vàng sang trọng</td>
                            <td>1</td>
                            <td>1.200.000</td>
                            <td>12:00 10/9/2023</td>
                            <td>Đã giao</td>
                            <td><NavLink to="/review"><i class="bi bi-star"></i><i class="bi bi-star"></i><i class="bi bi-star"></i><i class="bi bi-star"></i><i class="bi bi-star"></i></NavLink></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <Footer />

        </div>
    )
}

export default Order