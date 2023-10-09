import React from 'react'
import { Background,SP1, SP2, SP3, SP4,SP5, SP6, SP7, SP8,SP9 } from '../assets/Index';
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
                                <img src={SP1} class="card-img-top" height="400px" alt="..." />
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
                <div>
                    <h4 className='bg-dark text-white mt-2 p-2'>Long chim sao</h4>
                    <div className='row mb-2'>
                        <div class="col-3">
                            <div class="card">
                                <img src={SP5} class="card-img-top" height="400px" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Ten San Pham</h5>
                                    <a href="#" class="btn btn-outline-success float-end">Chi tiet</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-3">
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
                                <img src={SP7} class="card-img-top" height="400px" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Ten San Pham</h5>
                                    <a href="#" class="btn btn-outline-success float-end">Chi tiet</a>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                                <img src={SP8} class="card-img-top" height="400px" alt="..." />
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