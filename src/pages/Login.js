import React from 'react'
import { SP6 } from '../assets/Index'

const Login = () => {
    return (
        <div>
            <section class="vh-100">
                <div class="container py-5 h-100">
                    <div class="row d-flex align-items-center justify-content-center h-100">
                        <div class="col-md-8 col-lg-7 col-xl-6 text-center">
                            <img src={SP6} width="400px"
                                class="img-fluid" alt="Phone image" />
                        </div>
                        <div class="col-md-7 col-lg-5 col-xl-5">
                            <div className='fs-3 text-center my-5'>ĐĂNG NHẬP</div>
                            <form>
                                <div class="form-outline mb-4">
                                    <input type="email" id="form1Example13" class="form-control form-control-lg" />
                                    <label class="form-label" for="form1Example13">Email address</label>
                                </div>


                                <div class="form-outline mb-4">
                                    <input type="password" id="form1Example23" class="form-control form-control-lg" />
                                    <label class="form-label" for="form1Example23">Password</label>
                                </div>

                                <div class="d-flex justify-content-around align-items-center mb-4">

                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="form1Example3" checked />
                                        <label class="form-check-label" for="form1Example3"> Remember me </label>
                                    </div>
                                    <a href="#!" className='text-decoration-none'>Forgot password?</a>
                                </div>

                                <div className='d-flex flex-column justify-content-center align-items-center'>
                                    <button type="submit" class="btn btn-outline-success">Đăng nhập</button>

                                    <div class="divider d-flex align-items-center my-4">
                                        <p class="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
                                    </div>

                                    <a class="btn btn-outline-success">
                                    <i class="bi bi-google me-2"></i>Continue with Google
                                    </a>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Login