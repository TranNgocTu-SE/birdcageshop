import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Sale,LC1,LC2,LC3,LC4,LC5,LC6,LC7,LC8,LC9 } from '../assets/Index';
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
                            <img src={LC1} class="card-img-top" height="400px" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Ten San Pham</h5>
                                <NavLink to="/detail" className='btn btn-outline-success float-end'>Chi tiet</NavLink>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={LC5} class="card-img-top" height="400px" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Ten San Pham</h5>
                                <a href="#" class="btn btn-outline-success float-end">Chi tiet</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={LC6} class="card-img-top" height="400px" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Ten San Pham</h5>
                                <NavLink to="/detail" className='btn btn-outline-success float-end'>Chi tiet</NavLink>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={LC2} class="card-img-top" height="400px" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Ten San Pham</h5>
                                <a href="#" class="btn btn-outline-success float-end">Chi tiet</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={LC3} class="card-img-top" height="400px" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Ten San Pham</h5>
                                <a href="#" class="btn btn-outline-success float-end">Chi tiet</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={LC4} class="card-img-top" height="400px" alt="..." />
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
                            <img src={LC1} class="card-img-top" height="400px" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Ten San Pham</h5>
                                <NavLink to="/detail" className='btn btn-outline-success float-end'>Chi tiet</NavLink>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={LC5} class="card-img-top" height="400px" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Ten San Pham</h5>
                                <a href="#" class="btn btn-outline-success float-end">Chi tiet</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={LC6} class="card-img-top" height="400px" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Ten San Pham</h5>
                                <a href="#" class="btn btn-outline-success float-end">Chi tiet</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={LC2} class="card-img-top" height="400px" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Ten San Pham</h5>
                                <a href="#" class="btn btn-outline-success float-end">Chi tiet</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={LC2} class="card-img-top" height="400px" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Ten San Pham</h5>
                                <a href="#" class="btn btn-outline-success float-end">Chi tiet</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={LC2} class="card-img-top" height="400px" alt="..." />
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