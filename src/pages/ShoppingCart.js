import React from 'react'
import { LC8,LC9 } from '../assets/Index'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { NavLink } from 'react-router-dom'

const ShoppingCart = () => {
    return (
        <div>
            <Header />
            <section className="vh-100 bg-white">
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col">
                            <p><span className="h2">Shopping Cart </span><span className="h4">(1 item in your cart)</span></p>
                            <div className="card mb-4">
                                <div className="card-body p-2">
                                    <div className="row align-items-center">
                                        <div className="col-md-2">
                                            <img src={LC8}
                                                className="img-fluid" alt="Generic placeholder image" style = {{height:"150px"}}/>
                                        </div>
                                        <div className="col-md-2 d-flex justify-content-center">
                                            <div>
                                                <p className="small  mb-2 pb-2">Name</p>
                                                <p className="lead fw-normal mb-0">iPad Air</p>
                                            </div>
                                        </div>
                                        <div className="col-md-2 d-flex justify-content-center">
                                            <div>
                                                <p className="small mb-2 pb-2">Color</p>
                                                <p className="lead fw-normal mb-0"><i className="fas fa-circle me-2" style={{color: "#fdd8d2"}}></i>
                                                    pink rose</p>
                                            </div>
                                        </div>
                                        <div className="col-md-2 d-flex justify-content-center">
                                            <div>
                                                <p className="small mb-2 pb-2">Quantity</p>
                                                <p className="lead fw-normal mb-0">1</p>
                                            </div>
                                        </div>
                                        <div className="col-md-2 d-flex justify-content-center">
                                            <div>
                                                <p className="small mb-2 pb-2">Price</p>
                                                <p className="lead fw-normal mb-0">$799</p>
                                            </div>
                                        </div>
                                        <div className="col-md-2 d-flex justify-content-center">
                                            <div>
                                                <p className="small mb-2 pb-2">Total</p>
                                                <p className="lead fw-normal mb-0">$799</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card mb-4">
                                <div className="card-body p-2">
                                    <div className="row align-items-center">
                                        <div className="col-md-2">
                                            <img src={LC9}
                                                className="img-fluid" alt="Generic placeholder image" style = {{height:"150px"}}/>
                                        </div>
                                        <div className="col-md-2 d-flex justify-content-center">
                                            <div>
                                                <p className="small  mb-2 pb-2">Name</p>
                                                <p className="lead fw-normal mb-0">iPad Air</p>
                                            </div>
                                        </div>
                                        <div className="col-md-2 d-flex justify-content-center">
                                            <div>
                                                <p className="small mb-2 pb-2">Color</p>
                                                <p className="lead fw-normal mb-0"><i className="fas fa-circle me-2" style={{color: "#fdd8d2"}}></i>
                                                    pink rose</p>
                                            </div>
                                        </div>
                                        <div className="col-md-2 d-flex justify-content-center">
                                            <div>
                                                <p className="small mb-2 pb-2">Quantity</p>
                                                <p className="lead fw-normal mb-0">1</p>
                                            </div>
                                        </div>
                                        <div className="col-md-2 d-flex justify-content-center">
                                            <div>
                                                <p className="small mb-2 pb-2">Price</p>
                                                <p className="lead fw-normal mb-0">$799</p>
                                            </div>
                                        </div>
                                        <div className="col-md-2 d-flex justify-content-center">
                                            <div>
                                                <p className="small mb-2 pb-2">Total</p>
                                                <p className="lead fw-normal mb-0">$799</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card mb-5">
                                <div className="card-body p-4">
                                    <div className="float-end">
                                        <p className="mb-0 me-5 d-flex align-items-center">
                                            <span className="small text-muted me-2">Order total:</span> <span
                                                className="lead fw-normal">$799</span>
                                        </p>
                                    </div>

                                </div>
                            </div>
                            <div className="d-flex justify-content-end">
                                <NavLink to="/" className="btn btn-outline-success me-2">Continue shopping</NavLink>
                                <NavLink to="/checkout" className="btn btn-outline-success ">Checkout</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default ShoppingCart