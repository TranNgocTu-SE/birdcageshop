import React from 'react'
import { LC2 } from '../../assets/Index'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { v4 } from 'uuid';
import { storage } from '../firebase';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { useEffect } from 'react';
import { getCategories } from '../../redux/categorySlice';
import { createProduct } from '../../redux/productSlice';

function AddProduct() {

    const [product, setProduct] = useState();
    const [image, setImage] = useState(null);
    const { categories } = useSelector((state) => state.category);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleOnChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    }

    const handleOnChangeFile = (e) => {
        setImage(e.target.files[0]);
    }

    useEffect(() => {
        dispatch(getCategories());
    }, [])

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

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        console.log("alo");
        const img = await uploadImage();
        const newProduct = {
            ...product,
            image: img,
        }
        console.log(newProduct);
        dispatch(createProduct(newProduct));
        navigate('/managerProducts');
    }
    return (
        <div>
            <div className="container">
                <div className='row justify-content-center'>
                    <div className='col-md-10 p-0'>
                        <form className='mb-5' onSubmit={handleOnSubmit}>
                            <div className='row border  my-5 mx-0 p-3'>
                                <div className="col">
                                    <div className='row'>
                                        <img src={LC2} style={{ height: "600px" }} />
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className="row mb-4">
                                        <label htmlFor="colFormLabel" className="col-sm-3 col-form-label">Ten</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" id="colFormLabel" name='productName' onChange={handleOnChange} />
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <label htmlFor="colFormLabel" className="col col-form-label">Loai Long chim</label>
                                        <select className="form-select" id="inlineFormSelectPref" name='birdTypeId' onChange={handleOnChange}>
                                            <option defaultValue={1}>Long chim khuyen</option>
                                            {categories?.map((category, index) => (
                                                <option value={category.birdTypeId} key={index}>{category.name}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="row mb-4">
                                        <label htmlFor="colFormLabel" className="col-sm-3 col-form-label">Kieu long</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" id="colFormLabel" name='model' onChange={handleOnChange} />
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <label htmlFor="colFormLabel" className="col-sm-3 col-form-label">Gia</label>
                                        <div className="col-sm-9">
                                            <input type="number" className="form-control" id="colFormLabel" name='price' onChange={handleOnChange} />
                                        </div>
                                    </div>

                                    <div className="row mb-4">
                                        <label htmlFor="colFormLabel" className="col-sm-3 col-form-label">Mieu ta</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" id="colFormLabel" name='description' onChange={handleOnChange} />
                                        </div>
                                    </div>

                                    <div className="row mb-4">
                                        <label htmlFor="colFormLabel" className="col-sm-3 col-form-label">Status</label>
                                        <div className="col-sm-9">
                                            <input type="number" className="form-control" id="colFormLabel" name='status' onChange={handleOnChange} />
                                        </div>
                                    </div>

                                    <div className="row mb-4">
                                        <label htmlFor="colFormLabel" className="col-sm-3 col-form-label">Kich thuoc</label>
                                        <div className="col-sm-9">
                                            <input type="number" className="form-control" id="colFormLabel" name='size' onChange={handleOnChange} />
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <label htmlFor="colFormLabel" className="col-sm-3 col-form-label">Quantity</label>
                                        <div className="col-sm-9">
                                            <input type="number" className="form-control" id="colFormLabel" name='quantity' onChange={handleOnChange} />
                                        </div>
                                    </div>


                                    <div className="row mb-4">
                                        <label htmlFor="colFormLabel" className="col-sm-3 col-form-label">Chat lieu</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" id="colFormLabel" name='productMaterial' onChange={handleOnChange} />
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <label htmlFor="colFormLabel" className="col-sm-3 col-form-label">Loai</label>
                                        <div className="col-sm-9">
                                            <input type="number" className="form-control" id="colFormLabel" name='birdCageType' onChange={handleOnChange} />
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <div className="form-outline">
                                            <input type="file" id="file" name='image' className="form-control form-control-md" onChange={handleOnChangeFile} />
                                            <label className="form-label" htmlFor="file">Hinh anh</label>
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <label htmlFor="colFormLabel" className="col-sm-3 col-form-label">Mau sac</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" id="colFormLabel" name='color' onChange={handleOnChange} />
                                        </div>
                                    </div>

                                    <div className="row mb-4">
                                        <label htmlFor="colFormLabel" className="col-sm-3 col-form-label">Gia ban</label>
                                        <div className="col-sm-9">
                                            <input type="number" className="form-control" id="colFormLabel" name='sale' onChange={handleOnChange} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col text-end'>
                                <button type="submit" className="btn btn-outline-success">Save</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AddProduct