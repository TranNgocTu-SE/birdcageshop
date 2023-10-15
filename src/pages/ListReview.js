import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Avatar } from '../assets/Index'
import Pagination from '../components/Pagination'

const ListReview = () => {
    return (
        <div>
            <Header />
            <div className='container d-flex flex-column min-vh-100 mt-5'>
                <div className='row'>
                    <div className='col-md-11'>

                    </div>
                    <div className='col-md-1 pull-right '>
                        <i class="bi bi-star fs-5 me-2"></i>
                        <i class="bi bi-sort-down fs-3"></i>
                        <i class="bi bi-sort-down-alt fs-3"></i>
                    </div>
                </div>
                <div class="card mb-3">
                    <div class="row g-0">
                        <div class="col-md-1  text-center mt-2">
                            <img src={Avatar} style={{ height: "130px", width: "100px" }} />
                        </div>
                        <div class="col-md-11">
                            <div class="card-body">
                                <h5 class="card-title">Tran Ngoc Tu</h5>
                                <h6 class="card-title">
                                    <i class="bi bi-star fs-5 me-2"></i>
                                    <i class="bi bi-star fs-5 me-2"></i>
                                    <i class="bi bi-star fs-5 me-2"></i>
                                    <i class="bi bi-star fs-5 me-2"></i>
                                    <i class="bi bi-star fs-5 me-2"></i>
                                </h6>
                                <h6>Sản phẩm : Lồng chim sẻ</h6>
                                <p class="card-text">sản phẩm đúng như quảng cáo sản phẩm đúng như quảng cáo sản phẩm đúng như quảng cáo sản phẩm đúng như quảng cáo sản phẩm đúng như quảng cáo .</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card mb-3">
                    <div class="row g-0">
                        <div class="col-md-1  text-center mt-2">
                            <img src={Avatar} style={{ height: "130px", width: "100px" }} />
                        </div>
                        <div class="col-md-11">
                            <div class="card-body">
                                <h5 class="card-title">Tran Ngoc Tu</h5>
                                <h6 class="card-title">
                                    <i class="bi bi-star fs-5 me-2"></i>
                                    <i class="bi bi-star fs-5 me-2"></i>
                                    <i class="bi bi-star fs-5 me-2"></i>
                                    <i class="bi bi-star fs-5 me-2"></i>
                                    <i class="bi bi-star fs-5 me-2"></i>
                                </h6>
                                <h6>Sản phẩm : Lồng chim sẻ</h6>
                                <p class="card-text">sản phẩm đúng như quảng cáo sản phẩm đúng như quảng cáo sản phẩm đúng như quảng cáo sản phẩm đúng như quảng cáo sản phẩm đúng như quảng cáo .</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card mb-3">
                    <div class="row g-0">
                        <div class="col-md-1  text-center mt-2">
                            <img src={Avatar} style={{ height: "130px", width: "100px" }} />
                        </div>
                        <div class="col-md-11">
                            <div class="card-body">
                                <h5 class="card-title">Tran Ngoc Tu</h5>
                                <h6 class="card-title">
                                    <i class="bi bi-star fs-5 me-2"></i>
                                    <i class="bi bi-star fs-5 me-2"></i>
                                    <i class="bi bi-star fs-5 me-2"></i>
                                    <i class="bi bi-star fs-5 me-2"></i>
                                    <i class="bi bi-star fs-5 me-2"></i>
                                </h6>
                                <h6>Sản phẩm : Lồng chim sẻ</h6>
                                <p class="card-text">sản phẩm đúng như quảng cáo sản phẩm đúng như quảng cáo sản phẩm đúng như quảng cáo sản phẩm đúng như quảng cáo sản phẩm đúng như quảng cáo .</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card mb-3">
                    <div class="row g-0">
                        <div class="col-md-1  text-center mt-2">
                            <img src={Avatar} style={{ height: "130px", width: "100px" }} />
                        </div>
                        <div class="col-md-11">
                            <div class="card-body">
                                <h5 class="card-title">Tran Ngoc Tu</h5>
                                <h6 class="card-title">
                                    <i class="bi bi-star fs-5 me-2"></i>
                                    <i class="bi bi-star fs-5 me-2"></i>
                                    <i class="bi bi-star fs-5 me-2"></i>
                                    <i class="bi bi-star fs-5 me-2"></i>
                                    <i class="bi bi-star fs-5 me-2"></i>
                                </h6>
                                <h6>Sản phẩm : Lồng chim sẻ</h6>
                                <p class="card-text">sản phẩm đúng như quảng cáo sản phẩm đúng như quảng cáo sản phẩm đúng như quảng cáo sản phẩm đúng như quảng cáo sản phẩm đúng như quảng cáo .</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Pagination />
            <Footer />
        </div>
    )
}

export default ListReview