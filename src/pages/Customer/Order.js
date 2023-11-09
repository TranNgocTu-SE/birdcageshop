import React, { useEffect } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { LC2 } from '../../assets/Index'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getOrders } from '../../redux/orderSlice'

const Order = () => {


    const dispatch = useDispatch();
    const {listOrders} = useSelector((state) => state.order);

    useEffect(() => {
        dispatch(getOrders());
    },[])


    return (
        <div>
            <Header />
            <div className='container vh-100 mt-5'>
                <table className="table table-striped text-center">
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
                            <th scope="col" colSpan={2}>Đánh giá</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listOrders?.map((order,index) => (
                            <tr key={index}>
                            <th scope="row">1</th>
                            <td><img src={LC2} style={{ width: "60px", height: "80px" }} /></td>
                            <td>Lồng chim sẻ</td>
                            <td>gỗ trúc màu vàng sang trọng</td>
                            <td>1</td>
                            <td>1.200.000</td>
                            <td>{order.date}</td>
                            <td>{order.status}</td>
                            <td><NavLink to="/review">View</NavLink></td>
                            <td><NavLink to={`/review/${order.id}`}>Danh gia</NavLink></td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Footer />

        </div>
    )
}

export default Order