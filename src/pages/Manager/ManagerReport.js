import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import { NavLink } from 'react-router-dom'
import Pagination from '../../components/Pagination'

const ManagerReport = () => {
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
                    <div className='p-5 text-center'>
                        <table className="table table-light table-striped border border-success ">
                            <thead>
                                <tr>
                                    <th>Người tạo</th>
                                    <th>Thời gian gửi</th>
                                    <th>link</th>
                                    <th colSpan="2">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Trần Văn A</td>
                                    <td>00:00 12/10/2023</td>
                                    <td>https://www.youtube.com/watch?v=7bsmUB9KzTU&t=2731s&ab_channel=Tr%C3%ADTh%E1%BB%A9cRMX</td>
                                    <td>
                                        <NavLink to={`/editUser`} className="btn btn-outline-success me-2"><i className="fa fa-edit me-2"></i>Edit</NavLink>
                                        <button className="btn btn-outline-success me-2"><i className="bi bi-x-square me-2"></i>Delete</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Trần Văn A</td>
                                    <td>00:00 12/10/2023</td>
                                    <td>https://www.youtube.com/watch?v=7bsmUB9KzTU&t=2731s&ab_channel=Tr%C3%ADTh%E1%BB%A9cRMX</td>
                                    <td>
                                        <NavLink to={`/editUser`} className="btn btn-outline-success me-2"><i className="fa fa-edit me-2"></i>Edit</NavLink>
                                        <button className="btn btn-outline-success me-2"><i className="bi bi-x-square me-2"></i>Delete</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Trần Văn A</td>
                                    <td>00:00 12/10/2023</td>
                                    <td>https://www.youtube.com/watch?v=7bsmUB9KzTU&t=2731s&ab_channel=Tr%C3%ADTh%E1%BB%A9cRMX</td>
                                    <td>
                                        <NavLink to={`/editUser`} className="btn btn-outline-success me-2"><i className="fa fa-edit me-2"></i>Edit</NavLink>
                                        <button className="btn btn-outline-success me-2"><i className="bi bi-x-square me-2"></i>Delete</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <Pagination />
                </div>
            </div>
        </div>
    )
}

export default ManagerReport