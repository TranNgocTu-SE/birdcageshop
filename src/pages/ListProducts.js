import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Background, SP1, SP2, SP3, SP4, SP5, SP6, SP7, SP8, SP9 } from '../assets/Index';
import Pagination from '../components/Pagination';
import {NavLink} from 'react-router-dom'

const ListProducts = () => {
    return (
        <div>
            <Header />
            <div className='container d-flex flex-column min-vh-100 mt-4'>
                <div className='row'>
                    <div className='col fs-5 mb-3'>
                        Lồng chim khuyên
                    </div>
                    <div className='col text-end fs-4'>
                        <i class="bi bi-sort-down me-4"></i>
                        <i class="bi bi-sort-up"></i>
                    </div>
                </div>

                <div className='row pb-4'>
                    <div class="col">
                        <div class="card">
                            <img src={SP1} class="card-img-top" height="400px" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Ten San Pham</h5>
                                <NavLink to="/detail" className='btn btn-outline-success float-end'>Chi tiet</NavLink>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={SP5} class="card-img-top" height="400px" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Ten San Pham</h5>
                                <a href="#" class="btn btn-outline-success float-end">Chi tiet</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={SP6} class="card-img-top" height="400px" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Ten San Pham</h5>
                                <NavLink to="/detail" className='btn btn-outline-success float-end'>Chi tiet</NavLink>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={SP2} class="card-img-top" height="400px" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Ten San Pham</h5>
                                <a href="#" class="btn btn-outline-success float-end">Chi tiet</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={SP3} class="card-img-top" height="400px" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Ten San Pham</h5>
                                <a href="#" class="btn btn-outline-success float-end">Chi tiet</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={SP4} class="card-img-top" height="400px" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Ten San Pham</h5>
                                <a href="#" class="btn btn-outline-success float-end">Chi tiet</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row pb-4'>
                    <div class="col">
                        <div class="card">
                            <img src={SP1} class="card-img-top" height="400px" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Ten San Pham</h5>
                                <NavLink to="/detail" className='btn btn-outline-success float-end'>Chi tiet</NavLink>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={SP5} class="card-img-top" height="400px" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Ten San Pham</h5>
                                <a href="#" class="btn btn-outline-success float-end">Chi tiet</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={SP6} class="card-img-top" height="400px" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Ten San Pham</h5>
                                <a href="#" class="btn btn-outline-success float-end">Chi tiet</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={SP2} class="card-img-top" height="400px" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Ten San Pham</h5>
                                <a href="#" class="btn btn-outline-success float-end">Chi tiet</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={SP3} class="card-img-top" height="400px" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Ten San Pham</h5>
                                <a href="#" class="btn btn-outline-success float-end">Chi tiet</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={SP4} class="card-img-top" height="400px" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Ten San Pham</h5>
                                <a href="#" class="btn btn-outline-success float-end">Chi tiet</a>
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

export default ListProducts