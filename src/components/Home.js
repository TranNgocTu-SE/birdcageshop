import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import { deleteUser, getAllUser } from '../redux/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, json } from 'react-router-dom'
import Pagination from './Pagination'


const Home = ({ Toggle }) => {

    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(5)

    const data = useSelector((state) => state.users);
    const users = data.listUser;
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllUser());
        
    }, [])


    const IndexOfLastUser = page * limit;
    const IndexOfFirstUser = IndexOfLastUser - limit;
    const currentUser = users.slice(IndexOfFirstUser,IndexOfLastUser)

    {
        if (data.loading)
            return <h2>Loading...</h2>
    }

    {
        if (data.error != '')
            return <h2>data.error</h2>
    }

    
    let totalPage = Math.ceil(users.length / limit);

    

    const currentPage = (pageNumber) => {
        setPage(pageNumber);
    }
    return (
        <div>
            <div className='px-3'>

                <Nav Toggle={Toggle} />
                <div className='text-end'>
                    <NavLink to="/addUser" className="btn btn-outline-success"><i className="bi bi-plus-square me-2"></i>Add</NavLink>
                </div>

                <table className="table caption-top bg-white rounded text-center">
                    <caption className='text-white fs-4'>List of Manager</caption>
                    <thead>
                        <tr>
                            <th scope="col"></th>
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
                        {
                           currentPage && currentUser.map((user, index) => (
                                <tr key={index}>
                                    <td>{user.id}</td>
                                    <td>{user.username}</td>
                                    <td><img src={user.url} style={{ width: "100px", height: "100px" }} /></td>
                                    <td>{user.email}</td>
                                    <td>{user.address}</td>
                                    <td>{user.phone}</td>
                                    <td>{user.role}</td>
                                    <td>
                                        <NavLink to={`/editUser/${user.id}`} className="btn btn-outline-success me-4"><i className="fa fa-edit me-2"></i>Edit</NavLink>
                                        <button className="btn btn-outline-success me-2" onClick={() => dispatch(deleteUser(user.id))}><i className="bi bi-x-square me-2"></i>Delete</button>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
                <Pagination totalPage = {totalPage} currentPage = {currentPage} />
            </div>
        </div>

    )

}

export default Home