import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, json } from 'react-router-dom'
import { deleteUser } from '../redux/UserReducer'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Pagination from '../components/Pagination'

const Admin = () => {
  const users = useSelector((state) => state.users)
  const [data,setData] = useState([]);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteUser({ id: id }))
  }

  useEffect(() => {
     const response = fetch('https://fakestoreapi.com/users')
              .then(res=>res.json())
              .then(json=>setData(json))
  },[])
 

  return (

    <div>
      <Navbar />
      <div className='min-vh-100'>
        <div className='container mt-5 text-end'>
        <NavLink to="/addUser" className="btn btn-outline-success"><i className="bi bi-plus-square me-2"></i>Add</NavLink>
        </div>
      <div className='container mt-4 text-center'>
        <table className="table table-dark table-striped border border-success ">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th colSpan="2">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user, index) => (
              <tr key={index}>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>
                  <NavLink to={`/editUser/${user.id}`} className="btn btn-outline-success me-4"><i className="fa fa-edit me-2"></i>Edit</NavLink>
                  <button onClick={() => handleDelete(user.id)} className="btn btn-outline-success me-2"><i className="bi bi-x-square me-2"></i>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      </div>
      <Pagination />

      <Footer />
    </div>
  )
}

export default Admin