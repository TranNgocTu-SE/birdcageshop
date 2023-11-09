import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { createUser } from '../../redux/userSlice';
import { v4 } from 'uuid'
import { ref, uploadBytes, getDownloadURL, uploadBytesResumable } from 'firebase/storage';
import { storage } from '../firebase';

const AddUser = () => {
    const [user, setUser] = useState({});
    const [image, setImage] = useState(null);
    const [url,setUrl] = useState('hello');
   

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleOnChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const handleOnChangeFile = (e) => {
        const file = e.target.files[0]
        file.preview = URL.createObjectURL(file);
        setUrl(file);
        setImage(e.target.files[0]);
    }


    const uploadImage = async() => {
        const imageRef = ref(storage, `images/${image.name + v4()}`);
        return uploadBytesResumable(imageRef, image)
          .then(snapshot => {
            return getDownloadURL(snapshot.ref);
          })
          .then(downloadURL => {
          return downloadURL
          })
          .catch(error => {
            console.log(error);
          });
      };
  


    const handleSubmit = async (e) => {

        e.preventDefault(e);
        const url2 = await uploadImage();
        const newUser = {
            username: user.username,
            image:url2,
            email:user.email,
            password:user.password,
            phoneNumber:user.phoneNumber,
            role:user.role,
        }
        console.log(newUser);
        dispatch(createUser(newUser));
        navigate('/homeAdmin');
    }
   
    return (
        <div className='container'>
            <section className="vh-100">
                <div className="container h-100">
                    <div className="row justify-content-center align-items-center h-100">
                        <div className="col-12 col-lg-9 col-xl-7">
                            <div className="card shadow-2-strong card-registration" style={{ borderRadius: "15px" }}>
                                <div className="card-body p-4">
                                    <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Add Form</h3>
                                    <form onSubmit={handleSubmit}>
                                        <div className="col mb-2">
                                            <div className="form-outline">
                                                <input type="text" id="userName" name='username' className="form-control form-control-lg" onChange={handleOnChange} />
                                                <label className="form-label" htmlFor="userName">username</label>
                                            </div>
                                        </div>
                                        <div className="col mb-2">
                                            <div className="form-outline">
                                                <input type="text" id="password" name='password' className="form-control form-control-lg" onChange={handleOnChange} />
                                                <label className="form-label" htmlFor="password">Password</label>
                                            </div>

                                        </div>

                                        <div className="row">
                                            <div className="col mb-2 d-flex align-items-center">
                                                <div className="form-outline datepicker w-100">
                                                    <input type="text" name='phoneNumber' className="form-control form-control-lg" id="birthdayDate" onChange={handleOnChange} />
                                                    <label htmlFor="birthdayDate" className="form-label">Phone</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col mb-2 pb-2">
                                            <div className="form-outline">
                                                <input type="tel" id="phoneNumber" name='email' className="form-control form-control-lg" onChange={handleOnChange} />
                                                <label className="form-label" htmlFor="phoneNumber">Email</label>
                                            </div>
                                        </div>
                                        <div className='row'>
                                        <div className="col mb-2 pb-2">
                                            <div className="form-outline">
                                                <input type="file" id="file" name='file' className="form-control form-control-lg" onChange={handleOnChangeFile} />
                                                <label className="form-label" htmlFor="file">Image</label>
                                            </div>
                                        </div>
                                        <div className='col'>
                                            <img src={url} style={{width:"100px",height:"100px"}}/>
                                        </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <label className="form-label select-label me-3">Role</label>
                                                <select className="select form-control-md" name='role' onChange={handleOnChange}>
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
    )
}

export default AddUser