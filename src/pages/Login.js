import React, { useState } from 'react'
import { LC6 } from '../assets/Index'
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/authSlice';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Login = () => {

    const [user, setUser] = useState({});

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const { userInfo } = useSelector((state) => state.auth);

    const handleOnChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    useEffect(() => {
        if(!userInfo) {
            navigate("/login")
        }
        if(userInfo?.roleId === 1){
            navigate("/")
        }
        if(userInfo?.roleId === 2){
            navigate("/homeAdmin")
        }
        if(userInfo?.roleId === 3){
            navigate("/homeManager")
        }
        if(userInfo?.roleId === 4){
            navigate("/homeStaff")
        }
    },[userInfo])

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login(user));
    }
    return (
        <div>
            <div className="container">
                <div className="card mt-5 p-4 shadow w-75 mx-auto">
                    <div className="row d-flex align-items-center justify-content-center h-100">
                        <div className="col-md-8 col-lg-7 col-xl-6 text-center">
                            <img src={LC6} width="350px"
                                className="img-fluid shadow " alt="Phone image" />
                        </div>
                        <div className="col-md-7 col-lg-5 col-xl-5">
                            <div className='fs-3 text-center my-3'>ĐĂNG NHẬP</div>
                            <form onSubmit={handleSubmit}>
                                <div className="form-outline mb-3">
                                    <input type="" id="form1Example13" className="form-control form-control-lg" onChange={handleOnChange} name='username' />
                                    <label className="form-label" htmlFor="form1Example13">UserName</label>
                                </div>
                                <div className="form-outline mb-3">
                                    <input type="password" id="form1Example23" className="form-control form-control-lg" onChange={handleOnChange} name='password' />
                                    <label className="form-label" htmlFor="form1Example23">Password</label>
                                </div>

                                <div className="d-flex justify-content-around align-items-center mb-4">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="form1Example3" onChange={e => { }} checked />
                                        <label className="form-check-label" htmlFor="form1Example3"> Remember me </label>
                                    </div>
                                    <NavLink to="/register" className='text-decoration-none'>Đăng ký</NavLink>
                                </div>

                                <div className='d-flex flex-column justify-content-center align-items-center'>
                                    <button type="submit" className="btn btn-outline-success">Đăng nhập</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Login