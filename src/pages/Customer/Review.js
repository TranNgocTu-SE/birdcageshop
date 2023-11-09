import React, { useState } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { NavLink, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { createReview } from '../../redux/reviewSlice'

const Review = () => {

    const {id} = useParams();
    const [review,setReview] = useState({});
    const dispatch = useDispatch();
    const handleOnChange = (e) => {
        setReview({ ...review, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault(e);
        const newReview = {
            productId:id,
            userId: 1,
            ...review
        }
        dispatch(createReview(newReview));
    }
    
    return (
        <div>
            <Header />
            <div className='container vh-100'>
                
                <form className='mt-5' onSubmit={handleSubmit}>
                    <div className='text-center fs-3'>
                        <i className="bi bi-star mx-2"></i>
                        <i className="bi bi-star mx-2"></i>
                        <i className="bi bi-star mx-2"></i>
                        <i className="bi bi-star mx-2"></i>
                        <i className="bi bi-star mx-2"></i>
                        <br/>
                        
                    </div>
                    <div className="form-group mt-4">
                        <label htmlFor="exampleFormControlSelect1"><h6>Đánh giá sản phẩm</h6></label>
                        <select className="form-control" id="exampleFormControlSelect1" onChange={handleOnChange} name='rate' defaultValue={1}>
                            <option value={1}>1 sao</option>
                            <option value={2}>2 sao</option>
                            <option value={3}>3 sao</option>
                            <option value={4}>4 sao</option>
                            <option value={5}>5 sao</option>
                        </select>
                    </div>
                    <div className="form-group mt-4">
                        <label htmlFor="exampleFormControlTextarea1"><h6>Bạn thích hay không thích điều gì về sản phẩm</h6></label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" onChange={handleOnChange} name='content'></textarea>
                    </div>
                    <button type='submit' className='btn btn-outline-success pull-right mt-4'>Gửi</button>
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default Review