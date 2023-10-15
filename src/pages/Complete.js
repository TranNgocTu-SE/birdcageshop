import React from 'react'
import { NavLink } from 'react-router-dom'

const Complete = () => {
    return (
        <div className='row d-flex h-100 mt-5'>
                <div className='text-center'>
                    <div class="card w-50 mx-auto">
                        <div class="card-body">
                            <h5 class="card-title my-4">Đơn hàng của bạn đã được gửi thành công</h5>
                            <p>Địa chỉ: So 3, Duong 379, Tang Nhon Phu A, Q9,TP HCM.</p>
                            <NavLink to='/order' type='button' className='btn btn-outline-success  mx-5'>Hủy đơn hàng</NavLink>
                            <NavLink to='/' type='button' className='btn btn-outline-success my-1  mx-5'>Trang chủ</NavLink>
                        </div>
                    </div>
                </div>

        </div>

    )
}

export default Complete