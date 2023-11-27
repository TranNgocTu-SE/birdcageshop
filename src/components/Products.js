import React, { useEffect } from 'react'
import Category from '../pages/Customer/Category';
import ListProduct from '../pages/Customer/ListProduct';
import Promotion from './Promotion';

const Products = () => {
    return (
        <div>
            <Promotion />
            <div className="container">
                <div className='row'>
                    <div className="d-flex">
                        <div className='col-2'>
                            <Category />
                        </div>
                        <div className='col-10'>
                            <ListProduct />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Products;