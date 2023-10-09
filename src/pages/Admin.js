import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { deleteUser } from '../reudux/UserReducer'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Pagination from '../components/Pagination'

const Admin = () => {
  const users = useSelector((state) => state.users)

  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteUser({ id: id }))
  }
  return (

    <div className='min-vh-100'>
      <Navbar />
      <div className='container mt-5 text-end'>
        <NavLink to="/addUser" className="btn btn-outline-success"><i class="bi bi-plus-square me-2"></i>Add</NavLink>
      </div>
      <div className='container mt-4 text-center'>
        <table class="table table-dark table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <NavLink to={`/editUser/${user.id}`} className="btn btn-outline-success me-4"><i class="fa fa-edit me-2"></i>Edit</NavLink>
                  <button onClick={() => handleDelete(user.id)} className="btn btn-outline-success me-2"><i class="bi bi-x-square me-2"></i>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination />
      <Footer />
    </div>
  )
}

export default Admin