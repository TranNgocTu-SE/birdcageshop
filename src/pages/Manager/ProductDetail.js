import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { RateProduct } from './RateProduct'
import { useDispatch, useSelector } from 'react-redux'
import { updateProduct } from '../../redux/productSlice'
import { v4 } from 'uuid'
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage';
import { storage } from '../firebase';


const ProductDetail = () => {


    const { id } = useParams();
    const [image, setImage] = useState(null);
    const [updateData, setUpdateData] = useState();
    const [selectedImages, setSelectedImages] = useState();
    const { categories } = useSelector((state) => state.category);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { products, loading } = useSelector((state) => state.product);
    const [product, setProduct] = useState({});

    useEffect(() => {
        fetch(`http://20.197.41.167/api/v1/products/idTmp?idTmp=${id}`)
            .then(res => res.json())
            .then(result => {setUpdateData(result);setSelectedImages(result?.image)})
    }, [])
    const handleOnChange = (e) => {
        setUpdateData({ ...updateData, [e.target.name]: e.target.value });
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

    const onSelectFile = (e) => {
     const selectedFiles = e.target.files[0];
     setImage(e.target.files[0]);
     const imagesArray = URL.createObjectURL(selectedFiles)
     setSelectedImages(imagesArray);

    }
    console.log(selectedImages);

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        const url2 = await uploadImage()
        const newData = {
            productId: updateData.productId,
            productName: updateData.productName,
            birdTypeId: updateData.birdTypeId,
            model: updateData.model,
            quantity: updateData.quantity,
            price: updateData.price,
            description: updateData.description,
            status: updateData.status,
            size: updateData.size,
            productMaterial: updateData.productMaterial,
            birdCageType: updateData.birdCageType,
            image: url2,
            color: updateData.color,
            sale: updateData.sale
        }
        dispatch(updateProduct(newData));
        navigate("/managerProducts");
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
                                        <img src={selectedImages} style={{ height: "600px" }} />
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className="row mb-4">
                                        <label htmlFor="colFormLabel" className="col-sm-3 col-form-label">Ten</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" id="colFormLabel" name='productName' onChange={handleOnChange} value={updateData && updateData.productName || ""} />
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <label htmlFor="colFormLabel" className="col col-form-label">Loai Long chim</label>
                                        <select className="form-select" id="inlineFormSelectPref" name='birdTypeId' onChange={handleOnChange}>
                                            <option defaultValue={product?.birdTypeId}>Long chim khuyen</option>
                                            {categories?.map((category, index) => (
                                                <option value={category.birdTypeId} key={index}>{category.name}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="row mb-4">
                                        <label htmlFor="colFormLabel" className="col-sm-3 col-form-label">Kieu long</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" id="colFormLabel" name='model' onChange={handleOnChange} value={updateData && updateData.model || ""} />
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <label htmlFor="colFormLabel" className="col-sm-3 col-form-label">Gia</label>
                                        <div className="col-sm-9">
                                            <input type="number" className="form-control" id="colFormLabel" name='price' onChange={handleOnChange} value={updateData && updateData.price || ""} />
                                        </div>
                                    </div>

                                    <div className="row mb-4">
                                        <label htmlFor="colFormLabel" className="col-sm-3 col-form-label">Mieu ta</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" id="colFormLabel" name='description' onChange={handleOnChange} value={updateData && updateData.description || ""} />
                                        </div>
                                    </div>

                                    <div className="row mb-4">
                                        <label htmlFor="colFormLabel" className="col-sm-3 col-form-label">Status</label>
                                        <div className="col-sm-9">
                                            <input type="number" className="form-control" id="colFormLabel" name='status' onChange={handleOnChange} value={updateData && updateData.status || ""} />
                                        </div>
                                    </div>

                                    <div className="row mb-4">
                                        <label htmlFor="colFormLabel" className="col-sm-3 col-form-label">Kich thuoc</label>
                                        <div className="col-sm-9">
                                            <input type="number" className="form-control" id="colFormLabel" name='size' onChange={handleOnChange} value={updateData && updateData.size || ""} />
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <label htmlFor="colFormLabel" className="col-sm-3 col-form-label">Quantity</label>
                                        <div className="col-sm-9">
                                            <input type="number" className="form-control" id="colFormLabel" name='quantity' onChange={handleOnChange} value={updateData && updateData.quantity || ""} />
                                        </div>
                                    </div>


                                    <div className="row mb-4">
                                        <label htmlFor="colFormLabel" className="col-sm-3 col-form-label">Chat lieu</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" id="colFormLabel" name='productMaterial' onChange={handleOnChange} value={updateData && updateData.productMaterial || ""} />
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <label htmlFor="colFormLabel" className="col-sm-3 col-form-label">Loai</label>
                                        <div className="col-sm-9">
                                            <input type="number" className="form-control" id="colFormLabel" name='birdCageType' onChange={handleOnChange} value={updateData && updateData.birdCageType || ""} />
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <div className="form-outline">
                                            <input type="file" id="file" name='image' className="form-control form-control-md" onChange={onSelectFile} />
                                            <label className="form-label" htmlFor="file">Hinh anh</label>
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <label htmlFor="colFormLabel" className="col-sm-3 col-form-label">Mau sac</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" id="colFormLabel" name='color' onChange={handleOnChange} value={updateData && updateData.color || ""} />
                                        </div>
                                    </div>

                                    <div className="row mb-4">
                                        <label htmlFor="colFormLabel" className="col-sm-3 col-form-label">Gia ban</label>
                                        <div className="col-sm-9">
                                            <input type="number" className="form-control" id="colFormLabel" name='sale' onChange={handleOnChange} value={updateData && updateData.sale || ""} />
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
                <RateProduct />
            </div>
        </div>
    )
}

export default ProductDetail