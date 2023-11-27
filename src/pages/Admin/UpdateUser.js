import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getUser, updateUser } from '../../redux/userSlice';
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage';
import { storage } from '../firebase';
import { v4 } from 'uuid'


const UpdateUser = () => {

    const { id } = useParams();
    const [updateData, setUpdateData] = useState();
    const [image, setImage] = useState(null);
    const [selectedImages, setSelectedImages] = useState();
    const { loading, UpdateUser } = useSelector((state) => state.users);
    const dispatch = useDispatch()
    const navigate = useNavigate()


    useEffect(() => {
        fetch(`http://20.197.41.167/api/v1/users/idTmp?idTmp=${id}`)
            .then(res => res.json())
            .then(result => { setUpdateData(result); setSelectedImages(result?.image)})
    }, [])
    const handleOnChange = (e) => {
        setUpdateData({ ...updateData, [e.target.name]: e.target.value })
    }

    const onSelectFile = (e) => {
        const selectedFiles = e.target.files[0];
        setImage(e.target.files[0]);
        const imagesArray = URL.createObjectURL(selectedFiles)
        setSelectedImages(imagesArray);

    }


    const uploadImage = async () => {
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
        e.preventDefault();
        const url2 = await uploadImage();
        const newUser = {
            userId: updateData.userId,
            username: updateData.username,
            password: updateData.password,
            firstName: updateData.firstName,
            lastName: updateData.lastName,
            phoneNumber: updateData.phoneNumber,
            email: updateData.email,
            address: updateData.address,
            image: url2,
            roleId: updateData.roleId,
        }
        dispatch(updateUser(newUser));
        navigate("/homeAdmin")
    }
    return (
        <div>
            <div className='container my-5'>
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
                                    <div className="col mb-2">
                                        <div className="form-outline">
                                            <input type="text" id="address" name='address' className="form-control form-control-lg" onChange={handleOnChange}  value={updateData && updateData.address || ""}/>
                                            <label className="form-label" htmlFor="address">Address</label>
                                        </div>

                                    </div>
                                    <div className='row'>
                                        <div className="col mb-2 pb-2">
                                            <div className="form-outline">
                                                <input type="file" id="file" multiple name='file' className="form-control form-control-lg" onChange={onSelectFile} />
                                                <label className="form-label" htmlFor="file">Image</label>
                                            </div>
                                        </div>
                                        <div className='col'>
                                            <img src={selectedImages} style={{ width: "100px", height: "100px" }} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <label className="form-label select-label me-3">Role</label>
                                            <select className="select form-control-md" name='roleId' onChange={handleOnChange} value={updateData?.roleId}>
                                                <option value="4">Admin</option>
                                                <option value="3">Manager</option>
                                                <option value="2">Staff</option>
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
        </div>
    )
}

export default UpdateUser