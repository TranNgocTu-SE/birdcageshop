import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { deleteProduct, getProducts } from '../../redux/productSlice';
import { LC1 } from '../../assets/Index';

const ListProducts = () => {


    const { products,isDeleted } = useSelector((state) => state.product);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
    }, [isDeleted])

    return (
        <div>
            <div className='p-5 text-center'>
                <table className="table table-Light border border-success ">
                    <thead className='table-dark'>
                        <tr>
                            <th scope="col">Image</th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Sale</th>
                            <th scope="col">Stock</th>
                            <th scope="col">Promotion</th>
                            <th colSpan="2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products?.filter((e) => e.status === 1).map((product, index) => (
                            <tr key={index}>
                                <td><img src={product.image} style={{width:"100px",height:"120px"}}/></td>
                                <td>{product.productName}</td>
                                <td>{product.price}</td>
                                <td>{product.sale}</td>
                                <td>{product.quantity}</td>
                                <td>No</td>
                                <td>
                                    <NavLink to={`/editProduct/${product.productId}`} className="btn btn-outline-success me-2"><i className="fa fa-edit me-2"></i>Edit</NavLink>
                                    <button className="btn btn-outline-success me-2" onClick={() => dispatch(deleteProduct(product.productId))}><i className="bi bi-x-square me-2"></i>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ListProducts