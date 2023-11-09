import React from 'react'
import { LC6 } from '../../assets/Index'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../redux/authSlice';
import { useNavigate } from 'react-router-dom';

const Register = () => {

  const [user, setUser] = useState({});

  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleOnChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  const handleOnSubmit = (e) => {
    e.preventDefault(e);
    console.log(user);
    dispatch(registerUser(user));
    console.log("success");
    navigate("/login");
  }

  return (
    <div>
      <section className="bg-dark">
        <div className="container p-5">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col">
              <div className="card card-registration">
                <div className="row g-0">
                  <div className="col-md-6 p-5">
                    <img src={LC6}
                      alt="Sample photo" className="img-fluid"
                      style={{ borderRadius: ".25rem", height: "80%" }} />
                  </div>
                  <div className="col">
                    <form onSubmit={handleOnSubmit}>
                    <div className="card-body p-md-5 text-black">
                      <h3 className="mb-5 text-uppercase">Registration</h3>
                      <div className="form-outline">
                        <input type="text" id="form3Example1n" className="form-control form-control-lg" name='username' onChange={handleOnChange} />
                        <label className="form-label" htmlFor="form3Example1n">Name</label>
                      </div>
                      <div className="form-outline mb-4">
                        <input type="text" id="form3Example97" className="form-control form-control-lg" name='email' onChange={handleOnChange} />
                        <label className="form-label" htmlFor="form3Example97">Email</label>
                      </div>
                      <div className="form-outline mb-4">
                        <input type="text" id="form3Example9" className="form-control form-control-lg" name='password' onChange={handleOnChange} />
                        <label className="form-label" htmlFor="form3Example9">Password</label>
                      </div>
                      <div className="form-outline mb-4">
                        <input type="text" id="form3Example9" className="form-control form-control-lg" name='confirmPassword' onChange={handleOnChange} />
                        <label className="form-label" htmlFor="form3Example9">Confirm Password</label>
                      </div>
                      <div className="d-flex justify-content-between pt-3">
                        <button type="button" className="btn btn-outline-success">Reset all</button>
                        <button type="submit" className="btn btn-outline-success">Submit form</button>
                      </div>
                    </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Register