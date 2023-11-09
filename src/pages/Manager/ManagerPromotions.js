import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import { NavLink } from 'react-router-dom'
import Pagination from '../../components/Pagination'

const ManagerPromotions = () => {
    return (
        <div>
            <div className='d-flex'>
                <div className='w-auto'>
                    <Sidebar />
                </div>
                <div className='col'>
                    <div>
                        <Navbar />
                    </div>
                    <div className='container text-end pt-5 px-5'>
                        <NavLink to="/addPromotion" className="btn btn-outline-success"><i className="bi bi-plus-square me-2"></i>Add</NavLink>
                    </div>
                    <div className='p-5 text-center'>
                        <table className="table table-light table-striped border border-success ">
                            <thead>
                                <tr>
                                    <th scope="col">Mã</th>
                                    <th scope="col">Người tạo</th>
                                    <th scope="col">Giá trị giảm</th>
                                    <th scope="col">Thời gian</th>
                                    <th scope="col">Trạng thái</th>
                                    <th colSpan="2">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>safdsf</td>
                                    <td>website</td>
                                    <td>20%</td>
                                    <td>00:00 12/10/2023 - 00:17/10/2023</td>
                                    <td>Đang hoạt động</td>
                                    <td>
                                        <NavLink to={`/editUser`} className="btn btn-outline-success me-2"><i className="fa fa-edit me-2"></i>Edit</NavLink>
                                        <button className="btn btn-outline-success me-2"><i className="bi bi-x-square me-2"></i>Delete</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>safdsf</td>
                                    <td>website</td>
                                    <td>20%</td>
                                    <td>00:00 12/10/2023 - 00:17/10/2023</td>
                                    <td>Đang hoạt động</td>
                                    <td>
                                        <NavLink to={`/editUser`} className="btn btn-outline-success me-2"><i className="fa fa-edit me-2"></i>Edit</NavLink>
                                        <button className="btn btn-outline-success me-2"><i className="bi bi-x-square me-2"></i>Delete</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>safdsf</td>
                                    <td>website</td>
                                    <td>20%</td>
                                    <td>00:00 12/10/2023 - 00:17/10/2023</td>
                                    <td>Đang hoạt động</td>
                                    <td>
                                        <NavLink to={`/editUser`} className="btn btn-outline-success me-2"><i className="fa fa-edit me-2"></i>Edit</NavLink>
                                        <button className="btn btn-outline-success me-2"><i className="bi bi-x-square me-2"></i>Delete</button>
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

export default ManagerPromotions