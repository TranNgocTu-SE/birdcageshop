import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Avatar } from '../../assets/Index'
import Pagination from '../../components/Pagination'

const ListReview = () => {
    return (
        <div>
            <Header />
            <div className='container d-flex flex-column min-vh-100 mt-5'>
                <div className='row'>
                    <div className='col-md-11'>

                    </div>
                    <div className='col-md-1 pull-right '>
                        <i className="bi bi-star fs-5 me-2"></i>
                        <i className="bi bi-sort-down fs-3"></i>
                        <i className="bi bi-sort-down-alt fs-3"></i>
                    </div>
                </div>
                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-1  text-center mt-2">
                            <img src={Avatar} style={{ height: "130px", width: "100px" }} />
                        </div>
                        <div className="col-md-11">
                            <div className="card-body">
                                <h5 className="card-title">Tran Ngoc Tu</h5>
                                <h6 className="card-title">
                                    <i className="bi bi-star fs-5 me-2"></i>
                                    <i className="bi bi-star fs-5 me-2"></i>
                                    <i className="bi bi-star fs-5 me-2"></i>
                                    <i className="bi bi-star fs-5 me-2"></i>
                                    <i className="bi bi-star fs-5 me-2"></i>
                                </h6>
                                <h6>Sản phẩm : Lồng chim sẻ</h6>
                                <p className="card-text">sản phẩm đúng như quảng cáo sản phẩm đúng như quảng cáo sản phẩm đúng như quảng cáo sản phẩm đúng như quảng cáo sản phẩm đúng như quảng cáo .</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-1  text-center mt-2">
                            <img src={Avatar} style={{ height: "130px", width: "100px" }} />
                        </div>
                        <div className="col-md-11">
                            <div className="card-body">
                                <h5 className="card-title">Tran Ngoc Tu</h5>
                                <h6 className="card-title">
                                    <i className="bi bi-star fs-5 me-2"></i>
                                    <i className="bi bi-star fs-5 me-2"></i>
                                    <i className="bi bi-star fs-5 me-2"></i>
                                    <i className="bi bi-star fs-5 me-2"></i>
                                    <i className="bi bi-star fs-5 me-2"></i>
                                </h6>
                                <h6>Sản phẩm : Lồng chim sẻ</h6>
                                <p className="card-text">sản phẩm đúng như quảng cáo sản phẩm đúng như quảng cáo sản phẩm đúng như quảng cáo sản phẩm đúng như quảng cáo sản phẩm đúng như quảng cáo .</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-1  text-center mt-2">
                            <img src={Avatar} style={{ height: "130px", width: "100px" }} />
                        </div>
                        <div className="col-md-11">
                            <div className="card-body">
                                <h5 className="card-title">Tran Ngoc Tu</h5>
                                <h6 className="card-title">
                                    <i className="bi bi-star fs-5 me-2"></i>
                                    <i className="bi bi-star fs-5 me-2"></i>
                                    <i className="bi bi-star fs-5 me-2"></i>
                                    <i className="bi bi-star fs-5 me-2"></i>
                                    <i className="bi bi-star fs-5 me-2"></i>
                                </h6>
                                <h6>Sản phẩm : Lồng chim sẻ</h6>
                                <p className="card-text">sản phẩm đúng như quảng cáo sản phẩm đúng như quảng cáo sản phẩm đúng như quảng cáo sản phẩm đúng như quảng cáo sản phẩm đúng như quảng cáo .</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-1  text-center mt-2">
                            <img src={Avatar} style={{ height: "130px", width: "100px" }} />
                        </div>
                        <div className="col-md-11">
                            <div className="card-body">
                                <h5 className="card-title">Tran Ngoc Tu</h5>
                                <h6 className="card-title">
                                    <i className="bi bi-star fs-5 me-2"></i>
                                    <i className="bi bi-star fs-5 me-2"></i>
                                    <i className="bi bi-star fs-5 me-2"></i>
                                    <i className="bi bi-star fs-5 me-2"></i>
                                    <i className="bi bi-star fs-5 me-2"></i>
                                </h6>
                                <h6>Sản phẩm : Lồng chim sẻ</h6>
                                <p className="card-text">sản phẩm đúng như quảng cáo sản phẩm đúng như quảng cáo sản phẩm đúng như quảng cáo sản phẩm đúng như quảng cáo sản phẩm đúng như quảng cáo .</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ListReview