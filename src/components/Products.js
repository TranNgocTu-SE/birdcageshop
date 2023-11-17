import React, { useEffect } from 'react'
import { Sale, LC1, LC2, LC3, LC4, LC5, LC6, LC7, LC8, LC9 } from '../assets/Index';
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../redux/productSlice';

const Products = () => {

    const data = useSelector((state) => state.product);
    const products = data.products;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
    }, [])
    return (
        <div>
            <div className='container d-flex flex-column min-vh-100 mt-4'>
                <div className='row pb-4'>
                    {products?.filter((e) => e.status === 1).map((product, index) => (
                        <div className='col-md-3'key={index}>
                            <div className="card my-2" >
                                <img src={product.image} className="card-img-top" height="300px" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{product.productName}</h5>
                                    <NavLink to={`/detail/${product.productId}`} className='btn btn-outline-success float-end'>Chi tiet</NavLink>
                                </div>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </div>
    )
}

export default Products;