import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { NavLink } from 'react-router-dom'

const Review = () => {
    return (
        <div>
            <Header />
            <div className='container vh-100'>
                
                <form className='mt-5'>
                    <div className='text-center fs-3'>
                        <i class="bi bi-star mx-2"></i>
                        <i class="bi bi-star mx-2"></i>
                        <i class="bi bi-star mx-2"></i>
                        <i class="bi bi-star mx-2"></i>
                        <i class="bi bi-star mx-2"></i>
                        <br/>
                        
                    </div>
                    <div class="form-group mt-4">
                        <label for="exampleFormControlSelect1"><h6>Đánh giá sản phẩm</h6></label>
                        <select class="form-control" id="exampleFormControlSelect1">
                            <option>1 sao</option>
                            <option>2 sao</option>
                            <option>3 sao</option>
                            <option>4 sao</option>
                            <option>5 sao</option>
                        </select>
                    </div>
                    <div class="form-group mt-4">
                        <label for="exampleFormControlTextarea1"><h6>Bạn thích hay không thích điều gì về sản phẩm</h6></label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <NavLink to="/listReview" className='btn btn-outline-success pull-right mt-4'>Gửi</NavLink>
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default Review