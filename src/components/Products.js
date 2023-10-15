import React from 'react'
import { Sale,LC1,LC2,LC3,LC4,LC5,LC6,LC7,LC8,LC9 } from '../assets/Index';
import {NavLink} from 'react-router-dom'
import Header from './Header';
import Footer from './Footer';

const Products = () => {
    return (
        <div>
            <div className='container d-flex flex-column min-vh-100 mt-4'>
                <div>
                    <h4 className='bg-dark text-white mt-2 p-2'>Long chim se</h4>
                    <div className='row'>
                        <div class="col">
                            <div class="card">
                                <img src={LC1} class="card-img-top" height="400px" alt="..." />
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
                </div>
                <div>
                    <h4 className='bg-dark text-white mt-2 p-2'>Long chim sao</h4>
                    <div className='row mb-2'>
                        <div class="col-3">
                            <div class="card">
                                <img src={LC5} class="card-img-top" height="400px" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Ten San Pham</h5>
                                    <a href="#" class="btn btn-outline-success float-end">Chi tiet</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-3">
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
                                <img src={LC7} class="card-img-top" height="400px" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Ten San Pham</h5>
                                    <a href="#" class="btn btn-outline-success float-end">Chi tiet</a>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                                <img src={LC8} class="card-img-top" height="400px" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Ten San Pham</h5>
                                    <NavLink to="/detail" className='btn btn-outline-success float-end'>Chi tiet</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products;