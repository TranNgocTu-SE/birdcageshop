import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import { NavLink } from 'react-router-dom'
import { Avatar } from '../../assets/Index'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUser } from '../../redux/userSlice'

const ManagerStaff = () => {

    const {listUser} = useSelector((state) => state.users);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllUser());
    },[])
    console.log(listUser);
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
                <div className='p-5 text-center d-flex'>
                    <table className="table table-Light table-striped border border-success ">
                        <thead>
                            <tr>
                                <th scope="col">Mã nhân viên</th>
                                <th scope="col">Tên nhân viên</th>
                                <th scope="col">Ảnh</th>
                                <th scope="col">Giới tính</th>
                                <th scope="col">Thành tựu</th>
                                <th scope="col">Task đang làm</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listUser?.filter((e) => e.roleId === 4).map((user,index) => (
                                <tr key={index}>
                                <td>M12345</td>
                                <td>{user.username}</td>
                                <td><img src={user.image} style={{width:"100px",height:"100px"}}/></td>
                                <td>Nam</td>
                                <td>Trong tháng này : 20 đơn hàng</td>
                                <td>MS10828943fdsd,<br/>MK21423vvscd5,<br/>CN1424554454</td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    </div>
  )
}

export default ManagerStaff