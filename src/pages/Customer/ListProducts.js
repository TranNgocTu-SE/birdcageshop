import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Sale,LC1,LC2,LC3,LC4,LC5,LC6,LC7,LC8,LC9 } from '../../assets/Index';
import Pagination from '../../components/Pagination';
import {NavLink, useParams} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getProductByCategory } from '../../redux/productSlice';

const ListProducts = () => {

    const {id} = useParams();
    const dispatch = useDispatch();

    const { productByCategory } = useSelector(state => state.product);
    const { categories } = useSelector(state => state.category);
   


    useEffect(() => {
       dispatch(getProductByCategory(id));
    }, [id])

    
    return (
        <div>
            <Header />
            <div className='container d-flex flex-column min-vh-100 mt-4'>
                <div className='row'>
                    <div className='col fs-5 mb-3'>
                       Ten loai long chim
                    </div>
                    <div className='col text-end fs-4'>
                        <i className="bi bi-sort-down me-4"></i>
                        <i className="bi bi-sort-up"></i>
                    </div>
                </div>
                <div className='row'>
                {productByCategory?.map((product,index) => (
                    <div className="col-md-3" key={index}>
                        <div className="card">
                            <img src={product?.image} className="card-img-top" height="400px" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{product.productName}</h5>
                                <NavLink to={`/detail/${product.productId}`} className='btn btn-outline-success float-end'>Chi tiet</NavLink>
                            </div>
                        </div>
                    </div>
                ))}
                </div>
            </div>
            <Pagination />
            <Footer />
        </div>
    )
}

export default ListProducts