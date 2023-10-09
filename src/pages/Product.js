import React from 'react'
import { SP6 } from '../assets/Index';
import { NavLink } from 'react-router-dom'
import Header from '../components/Header';
import Footer from '../components/Footer';


const Product = () => {
    return (
        <div>
            <Header />
            <div className="d-flex flex-column min-vh-100 mt-4">
                <div className='card my-4' style={{marginLeft:"150px",marginRight:"150px"}}>
                    <div className='card-body p-3'>
                        <div class="row gx-4">
                            <div class="col-lg-6">
                                <div class="border rounded-4 mb-3 d-flex justify-content-center">
                                    <a class="rounded-4" target="_blank"  >
                                        <img class="rounded-4 fit mw-100 mh-100" src={SP6} />
                                    </a>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="ps-lg-3">
                                    <h4 class="title text-dark">
                                        LỒNG CHIM SẺ
                                    </h4>
                                    <div class="d-flex flex-row my-3">
                                        <div class="text-warning mb-1 me-2">
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fas fa-star-half-alt"></i>
                                            <span class="ms-1">
                                                4.5
                                            </span>
                                        </div>
                                        <span class="text-muted mx-5">154 sản phẩm trong kho</span>
                                        <NavLink to="/listReview" className="btn btn-outline-success ms-5">Xem đánh giá</NavLink>
                                    </div>

                                    <div class="mb-3">
                                        <span class="h5">1.200.000VND</span>
                                    </div>

                                    <p>
                                        Lồng chim sẻ bằng gỗ chất lượng cao
                                    </p>

                                    <h5 className='text-danger'>Mô tả</h5>
                                    <div class="row">
                                        <dt class="col-3">Chất liệu :</dt>
                                        <dd class="col-9">trúc cật già vàng</dd>

                                        <dt class="col-3">Kích thước :</dt>
                                        <dd class="col-9">rộng 36cm, cao 52cm</dd>

                                        <dt class="col-3">Kiểu lồng :</dt>
                                        <dd class="col-9">lồng trống</dd>

                                        <dt class="col-3">Màu sắc :</dt>
                                        <dd class="col-9">vàng</dd>

                                        <dt class="col-3">Liên hệ :</dt>
                                        <dd class="col-9">0123456789</dd>
                                    </div>

                                    <h5 className='text-danger'>Hình ảnh</h5>
                                    <div className='row d-flex gx-0'>
                                        <div className='col'>
                                            <img src={SP6} width="120px" />
                                        </div>
                                        <div className='col'>
                                            <img src={SP6} width="120px" />
                                        </div>
                                        <div className='col'>
                                            <img src={SP6} width="120px" />
                                        </div>
                                        <div className='col'>
                                            <img src={SP6} width="120px" />
                                        </div>
                                    </div>

                                    <hr />

                                    <div class="row">
                                        <div class="col-md-4 col-6">
                                            <label class="mb-3 d-block">Quantity</label>
                                            <div class="input-group mb-4" width="170px">
                                                <button class="btn btn-outline-success border border-success px-3" type="button" id="button-addon1" data-mdb-ripple-color="dark">
                                                    <i class="bi bi-dash"></i>
                                                </button>
                                                <input type="text" class="form-control text-center border border-success" placeholder="1" aria-label="Example text with button addon" aria-describedby="button-addon1" />
                                                <button class="btn btn-outline-success border border-secondary px-3" type="button" id="button-addon2" data-mdb-ripple-color="dark">
                                                    <i class="bi bi-plus"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-3'>
                                            <NavLink to="/compare" className="btn btn-outline-success shadow-0 mb-4">So sánh </NavLink>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-5'>
                                            <NavLink to="/shoppingCart" className="btn btn-outline-success shadow-0"> <i class="me-1 fa fa-shopping-basket"></i>Thêm vào giỏ hàng</NavLink>
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

export default Product