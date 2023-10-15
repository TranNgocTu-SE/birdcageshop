import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { LC1 } from '../assets/Index'

const OrderDetail = () => {
    return (
        <div>
            <Header />
           <div className='row gradient-custom'>
           <div class="" >
                <div class="container py-2 h-100">
                    <div class="row d-flex justify-content-center h-100">
                        <div class="col">
                            <div class="card card-stepper" style={{ borderRadius: "10px" }}>
                                <div class="card-body p-2">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="d-flex flex-column">
                                            <span class="lead fw-normal">Your order has been delivered</span>
                                            <span class="text-dark small">by DHFL on 21 Jan, 2020</span>
                                        </div>
                                    </div>
                                    <hr class="my-2" />
                                    <div class="d-flex flex-row justify-content-between align-items-center align-content-center">
                                        <span class="dot"></span>
                                        <hr class="flex-fill track-line" /><span class="dot"></span>
                                        <hr class="flex-fill track-line" /><span class="dot"></span>
                                        <hr class="flex-fill track-line" /><span class="dot"></span>
                                        <hr class="flex-fill track-line" /><span
                                            class="d-flex justify-content-center align-items-center big-dot dot">
                                            <i class="fa fa-check text-white"></i></span>
                                    </div>
                                    <div class="d-flex flex-row justify-content-between align-items-center">
                                        <div class="d-flex flex-column align-items-start"><span>15 Mar</span><span>Order placed</span>
                                        </div>
                                        <div class="d-flex flex-column justify-content-center"><span>15 Mar</span><span>Order
                                            placed</span></div>
                                        <div class="d-flex flex-column justify-content-center align-items-center"><span>15
                                            Mar</span><span>Order Dispatched</span></div>
                                        <div class="d-flex flex-column align-items-center"><span>15 Mar</span><span>Out for
                                            delivery</span></div>
                                        <div class="d-flex flex-column align-items-end"><span>15 Mar</span><span>Delivered</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="h-100 ">
                <div class="container py-2 ">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col">
                            <div class="card rounded-4" >
                                <div class="card-header px-4 py-3">
                                    <h5 class="text-dark mb-0">Thanks for your Order, <span style={{color: "#a8729a"}}>Tran Ngoc Tu</span>!</h5>
                                </div>
                                <div class="card-body p-4">
                                    <div class="d-flex justify-content-between align-items-center mb-2">
                                        <p class="lead fw-normal mb-0" style={{color: "#a8729a"}}>Receipt</p>
                                        <p class="small text-dark mb-0">Receipt Voucher : 1KAU9-84UIL</p>
                                    </div>
                                    <div class="card shadow-0 border">
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-md-2">
                                                    <img src={LC1}
                                                        class="img-fluid" alt="Phone" />
                                                </div>
                                                <div class="col-md-2 text-center d-flex justify-content-center align-items-center">
                                                    <p class="text-dark mb-0">Samsung Galaxy</p>
                                                </div>
                                                <div class="col-md-2 text-center d-flex justify-content-center align-items-center">
                                                    <p class="text-dark mb-0 small">White</p>
                                                </div>
                                                <div class="col-md-2 text-center d-flex justify-content-center align-items-center">
                                                    <p class="text-dark mb-0 small">Capacity: 64GB</p>
                                                </div>
                                                <div class="col-md-2 text-center d-flex justify-content-center align-items-center">
                                                    <p class="text-dark mb-0 small">Qty: 1</p>
                                                </div>
                                                <div class="col-md-2 text-center d-flex justify-content-center align-items-center">
                                                    <p class="text-dark mb-0 small">$499</p>
                                                </div>
                                            </div>
                                            <hr class="mb-4" style={{backgroundColor: "#e0e0e0", opacity: "1"}} />
                                            <div class="row d-flex align-items-center">
                                                <div class="col-md-2">
                                                    <p class="text-dark mb-0 small">Track Order</p>
                                                </div>
                                                <div class="col">
                                                    <div class="progress" style={{height: "6px", borderRadius: "16px"}}>
                                                        <div class="progress-bar" role="progressbar"
                                                            style={{width: "65%", borderRadius: "16px", backgroundColor: "#a8729a"}} aria-valuenow="65"
                                                            aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                    <div class="d-flex justify-content-around mb-1">
                                                        <p class="text-dark mt-1 mb-0 small ms-xl-5">Out for delivary</p>
                                                        <p class="text-dark mt-1 mb-0 small ms-xl-5">Delivered</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card shadow-0 border mb-3">
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-md-2">
                                                    <img src={LC1}
                                                        class="img-fluid" alt="Phone" />
                                                </div>
                                                <div class="col-md-2 text-center d-flex justify-content-center align-items-center">
                                                    <p class="text-dark mb-0">Samsung Galaxy</p>
                                                </div>
                                                <div class="col-md-2 text-center d-flex justify-content-center align-items-center">
                                                    <p class="text-dark mb-0 small">White</p>
                                                </div>
                                                <div class="col-md-2 text-center d-flex justify-content-center align-items-center">
                                                    <p class="text-dark mb-0 small">Capacity: 64GB</p>
                                                </div>
                                                <div class="col-md-2 text-center d-flex justify-content-center align-items-center">
                                                    <p class="text-dark mb-0 small">Qty: 1</p>
                                                </div>
                                                <div class="col-md-2 text-center d-flex justify-content-center align-items-center">
                                                    <p class="text-dark mb-0 small">$499</p>
                                                </div>
                                            </div>
                                            <hr class="mb-4" style={{backgroundColor: "#e0e0e0", opacity: "1"}} />
                                            <div class="row d-flex align-items-center">
                                                <div class="col-md-2">
                                                    <p class="text-dark mb-0 small">Track Order</p>
                                                </div>
                                                <div class="col">
                                                    <div class="progress" style={{height: "6px", borderRadius: "16px"}}>
                                                        <div class="progress-bar" role="progressbar"
                                                            style={{width: "65%", borderRadius: "16px", backgroundColor: "#a8729a"}} aria-valuenow="65"
                                                            aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                    <div class="d-flex justify-content-around mb-1">
                                                        <p class="text-dark mt-1 mb-0 small ms-xl-5">Out for delivary</p>
                                                        <p class="text-dark mt-1 mb-0 small ms-xl-5">Delivered</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="d-flex justify-content-between pt-2">
                                        <p class="fw-bold mb-0">Order Details</p>
                                        <p class="text-dark mb-0"><span class="fw-bold me-4">Total</span> $898.00</p>
                                    </div>

                                    <div class="d-flex justify-content-between pt-2">
                                        <p class="text-dark mb-0">Invoice Number : 788152</p>
                                        <p class="text-dark mb-0"><span class="fw-bold me-4">Discount</span> $19.00</p>
                                    </div>

                                    <div class="d-flex justify-content-between">
                                        <p class="text-dark mb-0">Invoice Date : 22 Dec,2019</p>
                                        <p class="text-dark mb-0"><span class="fw-bold me-4">GST 18%</span> 123</p>
                                    </div>

                                    <div class="d-flex justify-content-between mb-2">
                                        <p class="text-dark mb-0">Recepits Voucher : 18KU-62IIK</p>
                                        <p class="text-dark mb-0"><span class="fw-bold me-4">Delivery Charges</span> Free</p>
                                    </div>
                                </div>
                                <div class="card-footer border-0 px-4 py-3 rounded-bottom-4"
                                    style={{ backgroundColor: "#a8729a"}}>
                                    <h5 class="d-flex align-items-center justify-content-end text-white text-uppercase mb-0">Total
                                        paid: <span class="h2 mb-0 ms-2">$1040</span></h5>
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

export default OrderDetail