import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { addToCart } from '../../redux/cartSlice';

const ListProduct = () => {

    const { products } = useSelector(state => state.product);
    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    }

    return (
        <div>
            <h2 className="title text-center">Features Items</h2>
            <div className='container'>
                <div className='row pb-4'>
                    {products?.filter((e) => e.status === 1).map((product, index) => (
                        <div className="col-sm-3" key={index}>
                            <div className="product-image-wrapper rounded-4">
                                <div className="single-products">
                                    <div className="productinfo text-center">
                                        <img src={product.image} alt="" />
                                        <h2>{product.price} VNĐ</h2>
                                        <h6>{product.productName}</h6>
                                        <NavLink to={`/detail/${product.productId}`} className="add-to-cart border-0 text-decoration-none">Detail</NavLink>
                                        <NavLink to="/shoppingCart" className="add-to-cart border-0 text-decoration-none" onClick={() => handleAddToCart(product)}>Add to cart</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ListProduct