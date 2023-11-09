import React, { useEffect, useState } from 'react'
import { LC6 } from '../../assets/Index';
import { NavLink, useParams } from 'react-router-dom'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';
import { getProduct } from '../../redux/productSlice';


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
            <Header />
            <div className="d-flex flex-column min-vh-100 mt-4">
                <div className='card my-4' style={{ marginLeft: "150px", marginRight: "150px" }}>
                    <div className='card-body p-3'>
                        <div className="row gx-4">
                            <div className="col-lg-6">
                                <div className="border rounded-4 mb-3 d-flex justify-content-center">
                                    <a className="rounded-4" target="_blank"  >
                                        <img className="rounded-4 fit mw-100 mh-100" src={product?.image} />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="ps-lg-3">
                                    <h4 className="title text-dark">
                                        {product?.productName}
                                    </h4>
                                    <div className="d-flex flex-row my-3">
                                        <div className="text-warning mb-1 me-2">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fas fa-star-half-alt"></i>
                                            <span className="ms-1">
                                                4.5
                                            </span>
                                        </div>
                                        <span className="text-muted mx-5">{product?.quantity} sản phẩm trong kho</span>
                                        <NavLink to={`/listReview/${product?.productId}`} className="btn btn-outline-success ms-5">Xem đánh giá</NavLink>
                                    </div>

                                    <div className="mb-3">
                                        <span className="h5">{product?.price}</span>
                                    </div>

                                    <p>
                                        {product?.description}
                                    </p>

                                    <h5 className='text-danger'>Mô tả</h5>
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

                                    <h5 className='text-danger'>Hình ảnh</h5>
                                    <div className='row d-flex gx-0'>
                                        <div className='col'>
                                            <img src={product?.image} width="120px" />
                                        </div>
                                        <div className='col'>
                                            <img src={product?.image} width="120px" />
                                        </div>
                                        <div className='col'>
                                            <img src={product?.image} width="120px" />
                                        </div>
                                        <div className='col'>
                                            <img src={product?.image} width="120px" />
                                        </div>
                                    </div>

                                    <hr />

                                    {/* <div className="row">
                                        <div className="col-md-4 col-6">
                                            <label className="mb-3 d-block">Quantity</label>
                                            <div className="input-group mb-4" width="170px">
                                                <button className="btn btn-outline-success border border-success px-3" type="button" id="button-addon1" data-mdb-ripple-color="dark">
                                                    <i className="bi bi-dash"></i>
                                                </button>
                                                <input type="text" className="form-control text-center border border-success" placeholder="1" aria-label="Example text with button addon" aria-describedby="button-addon1" />
                                                <button className="btn btn-outline-success border border-secondary px-3" type="button" id="button-addon2" data-mdb-ripple-color="dark">
                                                    <i className="bi bi-plus"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    */}
                                    <div className='row'>
                                        <div className='col-3'>
                                            <NavLink to={`/compare/${product?.productId}`} className="btn btn-outline-success shadow-0 mb-4">So sánh </NavLink>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-5'>
                                            <NavLink to="/shoppingCart" className="btn btn-outline-success shadow-0" onClick={() => handleAddToCart(product)}> <i className="me-1 fa fa-shopping-basket"></i>Thêm vào giỏ hàng</NavLink>
                                        </div>
                                    </div>
                                    <div className='row mt-5'>
                                        <div className='col text-center'>
                                            7 ngày miễn phí trả hàng
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ProductDetailShop