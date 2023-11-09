import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import { Avatar } from '../../assets/Index'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { updateUser } from '../../redux/userSlice'


const Profile = () => {

    const [updateData, setUpdateData] = useState();

    const {userInfo} = useSelector((state) => state.auth);
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        
    }, [])
    console.log(updateData);
    
    const handleOnChange = (e) => {
        setUpdateData({ ...updateData, [e.target.name]: e.target.value })
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateUser(updateData));
        navigate("/homeAdmin")
    }


    return (
        <div>
            <div className='d-flex'>
                <div className='w-auto'>
                    <Sidebar />
                </div>
                <div className='col'>
                    <div>
                        <Navbar />
                        <div className='container d-flex flex-column min-vh-100 mt-4'>
                            <div className="row mt-4">
                                <div className="col-4">
                                    <div className="card mb-4">
                                        <div className="card-body text-center">
                                            <img src={Avatar} alt="avatar"
                                                className="rounded-circle img-fluid" style={{ width: "150px" }} />
                                            <h5 className="my-3">{userInfo.username}</h5>
                                            <p className="text-muted mb-1">Full Stack Developer</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-8">
                                    <form onSubmit={handleSubmit}>
                                    <div className="row mb-3">
                                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Name</label>
                                            <div className="col-sm-10">
                                                <input type="text" className="form-control" id="inputEmail3" name='username' onChange={handleOnChange} value={userInfo && userInfo.username || ""}/>
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                                            <div className="col-sm-10">
                                                <input type="text" className="form-control" id="inputEmail3" name='email' onChange={handleOnChange} value={userInfo && userInfo.email || ""} />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Phone</label>
                                            <div className="col-sm-10">
                                                <input type="text" className="form-control" id="inputEmail3" name='phoneNumber' onChange={handleOnChange} value={userInfo && userInfo.phoneNumber || ""}/>
                                            </div>
                                        </div>
                                        <button type="submit" className="btn btn-outline-success pull-right">Update</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile