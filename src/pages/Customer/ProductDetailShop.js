import React, { useEffect, useState } from 'react'
import { LC6 } from '../../assets/Index';
import { NavLink, useParams } from 'react-router-dom'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';
import { getProduct } from '../../redux/productSlice';
import RateProduct from '../Manager/RateProduct';

const ProductDetailShop = () => {

    const { id } = useParams();
    const { products, loading, product } = useSelector((state) => state.product);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProduct(id));
    }, [])


    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    }

    return (
        <div>
            <div className=" container d-flex flex-column my-4">
                <div className='card' >
                    <div className='card-body'>
                        <div className="row">
                            <div className="col-5">
                                <div className="border rounded-4 d-flex justify-content-center">
                                    <a className="rounded-4" target="_blank"  >
                                        <img className="rounded-4" src={product?.image} style={{ width: "330px", height: "540px" }} />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="ps-lg-3">
                                    <h4 className="title text-dark">
                                        {product?.productName}
                                    </h4>
                                    <div className="d-flex flex-row my-3 align-items-center">
                                        <div className="text-warning mb-1 me-2">
                                            <span className="me-2">
                                                4.5
                                            </span>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fas fa-star-half-alt"></i>
                                        </div>
                                        <span className="text-muted mx-5"><strong className='me-1'>{product?.quantity}</strong> sản phẩm trong kho</span>
                                        <NavLink to={`/compare/${product?.productId}`} className="btn btn-outline-success">So sánh </NavLink>
                                    </div>

                                    <div className="mb-3">
                                        <span className="h4">{product?.price}</span>
                                    </div>

                                    <p>
                                        {product?.description}
                                    </p>

                                    <h5 className='text-danger mt-2'>Mô tả</h5>
                                    <div className="row">
                                        <dt className="col-3">Chất liệu :</dt>
                                        <dd className="col-9">{product?.productMaterial}</dd>

                                        <dt className="col-3">Kích thước :</dt>
                                        <dd className="col-9">{product?.size}</dd>

                                        <dt className="col-3">Kiểu lồng :</dt>
                                        <dd className="col-9">{product?.model}</dd>

                                        <dt className="col-3">Màu sắc :</dt>
                                        <dd className="col-9">{product?.color}</dd>
                                    </div>

                                    <h5 className='text-danger mt-2'>Hình ảnh</h5>
                                    <div className='row d-flex gx-0'>
                                        <div className='col'>
                                            <img src={product?.image} height="150px" className='rounded-4' />
                                        </div>
                                        <div className='col'>
                                            <img src={product?.image} height="150px" className='rounded-4' />
                                        </div>
                                        <div className='col'>
                                            <img src={product?.image} height="150px" className='rounded-4' />
                                        </div>
                                        <div className='col'>
                                            <img src={product?.image} height="150px" className='rounded-4' />
                                        </div>
                                    </div>

                                    <hr />
                                    <div className='text-end mt-4'>
                                        <NavLink to="/shoppingCart" className="btn btn-outline-success shadow-0" onClick={() => handleAddToCart(product)}> <i className="me-1 fa fa-shopping-basket"></i>Add to cart</NavLink>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row mb-3'>
                        <div className='col text-center'>
                            7 ngày miễn phí trả hàng
                        </div>
                    </div>
                </div>

            </div>
            <RateProduct />
        </div>
    )
}

export default ProductDetailShop