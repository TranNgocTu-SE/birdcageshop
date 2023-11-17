import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, getAllUser } from '../../redux/userSlice'
import Pagination from '../../components/Pagination'
import { NavLink } from 'react-router-dom'

const HomeAdmin = () => {

    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(4)

    const { listUser, loading, error, isDeleted, isUpdated } = useSelector((state) => state.users);
    const { userInfo } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllUser());
    }, [isDeleted, isUpdated])

    const checkDelete = (users) => {
        let array = [];
        for (let i = 0; i < users.length; i++) {
            if (users[i].status === 1) {
                array.push(users[i]);
            }

        }
        return array;

    }

    const IndexOfLastUser = page * limit;
    const IndexOfFirstUser = IndexOfLastUser - limit;
    const newArray = checkDelete(listUser);
    const currentUser = newArray.slice(IndexOfFirstUser, IndexOfLastUser)

    {
        if (loading)
            return <h2>Loading...</h2>
    }



    let totalPage = Math.ceil(listUser.length / limit);



    const currentPage = (pageNumber) => {
        setPage(pageNumber);
    }

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
                        <div className='container'>
                            <div className='px-3 mt-5'>
                                <div className='text-end'>
                                    <NavLink to="/addUser" className="btn btn-outline-success"><i className="bi bi-plus-square me-2"></i>Add</NavLink>
                                </div>

                                <table className="table caption-top bg-white rounded text-center">
                                    <caption className='text-white fs-4'>List of Manager</caption>
                                    <thead>
                                        <tr>
                                            <th scope="col">Name</th>
                                            <th scope="col">Image</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Address</th>
                                            <th scope="col">Phone</th>
                                            <th scope="col">Role</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {listUser?.filter((e) => e.status === 1 && e.userId != userInfo.userId).map((user, index) => (
                                            <tr key={index}>
                                                <td>{user.username}</td>
                                                <td><img src={user.image} style={{ width: "100px", height: "100px" }} /></td>
                                                <td>{user.email}</td>
                                                <td>{user.address}</td>
                                                <td>{user.phoneNumber}</td>
                                                <td>
                                                    {(() => {
                                                        if (user.roleId === 1) {
                                                            return (
                                                                <div>Customer</div>
                                                            )
                                                        } else if (user.roleId === 2) {
                                                            return (
                                                                <div>Staff</div>
                                                            )
                                                        } else if (user.roleId === 3) {
                                                            return (
                                                                <div>Manager</div>
                                                            )
                                                        } else if (user.roleId === 4) {
                                                            return (
                                                                <div>Admin</div>
                                                            )
                                                        }
                                                    })()}
                                                </td>
                                                <td>
                                                    <NavLink to={`/editUser/${user.userId}`} className="btn btn-outline-success me-4"><i className="fa fa-edit me-2"></i>Edit</NavLink>
                                                    <button className="btn btn-outline-success me-2" onClick={() => dispatch(deleteUser(user.userId))}><i className="bi bi-x-square me-2"></i>Delete</button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                {/* <Pagination totalPage={totalPage} currentPage={currentPage} /> */}
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default HomeAdmin