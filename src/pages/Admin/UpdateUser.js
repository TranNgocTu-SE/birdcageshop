import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getUser, updateUser } from '../../redux/userSlice';



const UpdateUser = () => {
    const { id } = useParams();

    const [updateData, setUpdateData] = useState();

    const { loading, UpdateUser } = useSelector((state) => state.users);
    const dispatch = useDispatch()
    const navigate = useNavigate()


    useEffect(() => {
        fetch(`https://localhost:44314/api/v1/users/idTmp?idTmp=${id}`)
            .then(res => res.json())
            .then(result => setUpdateData(result))
    }, [])
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
            <div className='container'>
                <section className="vh-100">
                    <div className="container h-100">
                        <div className="row justify-content-center align-items-center h-100">
                            <div className="col-12 col-lg-9 col-xl-7">
                                <div className="card shadow-2-strong card-registration" style={{ borderRadius: "15px" }}>
                                    <div className="card-body p-4">
                                        <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Update Form</h3>
                                        <form onSubmit={handleSubmit}>
                                            <div className="col mb-2">
                                                <div className="form-outline">
                                                    <input type="text" id="userName" name='username' className="form-control form-control-lg" onChange={handleOnChange} value={updateData && updateData.username || ""} />
                                                    <label className="form-label" htmlFor="userName">Name</label>
                                                </div>
                                            </div>
                                            <div className="col mb-2">
                                                <div className="form-outline">
                                                    <input type="text" id="email" name='email' className="form-control form-control-lg" onChange={handleOnChange} value={updateData && updateData.email || ""} />
                                                    <label className="form-label" htmlFor="email">Email</label>
                                                </div>

                                            </div>

                                            <div className="row">
                                                <div className="col mb-2 d-flex align-items-center">

                                                    <div className="form-outline datepicker w-100">
                                                        <input type="text" name='password' className="form-control form-control-lg" id="birthdayDate" onChange={handleOnChange} value={updateData && updateData.password || ""} />
                                                        <label htmlFor="birthdayDate" className="form-label">Password</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col mb-2 pb-2">
                                                <div className="form-outline">
                                                    <input type="tel" id="phoneNumber" name='phoneNumber' className="form-control form-control-lg" onChange={handleOnChange} value={updateData && updateData.phoneNumber || ""} />
                                                    <label className="form-label" htmlFor="phoneNumber">Phone Number</label>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12">
                                                    <label className="form-label select-label me-3">Role</label>
                                                    <select className="select form-control-md" onChange={handleOnChange} value={updateData && updateData.role || ""}>
                                                        <option value="3">Manager</option>
                                                        <option value="4">Staff</option>
                                                        <option value="1">Customer</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="mt-2 pt-1 text-end">
                                                <button className="btn btn-outline-success" type="submit">Submit</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default UpdateUser