import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProduct, getProducts } from '../../redux/productSlice';

const Popup = () => {

    const [id, setId] = useState();

    const {products} = useSelector((state) => state.product);
    
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getProducts());
    },[])

    const handleOnChange = (e) => {
        setId(e.target.value);
    }

   const handleSubmit = (e) => {
    e.preventDefault(e);
    dispatch(getProduct(id));
   }

    return (
        <div>
            <button type="button" className="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Chọn sản phẩm so sánh
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-body">
                            <form className="row row-cols-lg-auto g-3 align-items-center" onSubmit={handleSubmit}>
                                <div className="col-12">
                                    <label className="visually-hidden" htmlFor="inlineFormSelectPref">Preference</label>
                                    <select className="form-select" id="inlineFormSelectPref" onChange={handleOnChange}>
                                        <option defaultValue={1}>Chọn Lồng chim để so sánh</option>
                                        {products?.map((product, index) => (
                                            <option value={product.productId} key={index}>{product.productName}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="col-12">
                                    <button type="submit" className="btn btn-outline-success" data-bs-dismiss="modal">So sanh</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Popup