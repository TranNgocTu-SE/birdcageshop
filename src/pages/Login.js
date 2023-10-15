import React, { useState } from 'react'
import { LC6 } from '../assets/Index'

const Login = () => {

    const [email,setEmail] = useState("");
    const [username,setUserName] = useState("");
    const [password,setPassword] = useState("");
    const [user,setUser] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username,password);
        fetch('https://fakestoreapi.com/auth/login',{
            method:'POST',
            headers:{token:"eyJhbGciOiJIUzI1NiIsInR"},
            body:JSON.stringify({
                username,
                password
            })
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
        
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
                                        <input type="" id="form1Example13" className="form-control form-control-lg" onChange={(e) => setUserName(e.target.value)}/>
                                        <label className="form-label" htmlFor="form1Example13">Email address</label>
                                    </div>


                                    <div className="form-outline mb-3">
                                        <input type="password" id="form1Example23" className="form-control form-control-lg" onChange={(e) => setPassword(e.target.value)} />
                                        <label className="form-label" htmlFor="form1Example23">Password</label>
                                    </div>

                                    <div className="d-flex justify-content-around align-items-center mb-4">

                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="form1Example3" onChange={e => {}} checked />
                                            <label className="form-check-label" htmlFor="form1Example3"> Remember me </label>
                                        </div>
                                        <a href="#!" className='text-decoration-none'>Forgot password?</a>
                                    </div>

                                    <div className='d-flex flex-column justify-content-center align-items-center'>
                                        <button type="submit" className="btn btn-outline-success">Đăng nhập</button>

                                        <div className="divider d-flex align-items-center my-3">
                                            <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
                                        </div>

                                        <a className="btn btn-outline-success">
                                            <i className="bi bi-google me-2"></i>Continue with Google
                                        </a>
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