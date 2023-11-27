import React, { useEffect, useState } from 'react'
import { Avatar, LC1 } from '../../assets/Index'
import { useDispatch, useSelector } from 'react-redux';
import { getReviewById, getReviews } from '../../redux/reviewSlice';
import { useParams } from 'react-router-dom';
import { Rating } from '@mui/material';

export const RateProduct = () => {

    const { id } = useParams();
    const { reviewById } = useSelector((state) => state.review);
    const { userInfo } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getReviewById(id));
    }, [])

    console.log(userInfo);

    return (
        <div>
            <div className="container text-center mb-5">
                <div className="row justify-content-center ">
                    <div className="col-10 border border-success rounded p-3">
                        <div className="row p-3">
                            Đánh giá sản phẩm
                        </div>
                        <div className="d-flex align-items-start mt-4">
                            <div className="col-1 p-2 m-2">
                                <div>Sort</div>
                            </div>
                            <div className="p-2">
                                <button className="btn btn-outline-success">5 sao</button>
                            </div>
                            <div className="p-2">
                                <button className="btn btn-outline-success">4 sao</button>
                            </div>
                            <div className="p-2">
                                <button className="btn btn-outline-success">3 sao</button>
                            </div>
                            <div className="p-2">
                                <button className="btn btn-outline-success">2 sao</button>
                            </div>
                            <div className="p-2">
                                <button className="btn btn-outline-success">1 sao</button>
                            </div>
                        </div>

                        <div>
                            {reviewById?.map((review, index) => (
                                <div className="card  my-4 text-start" key={index}>
                                    <div className="row g-0">
                                        <div className="col-md-1">
                                            <div className='row p-3 mb-5'>
                                                <img src={review.image} className="img-fluid rounded-circle" alt="..." />
                                            </div>
                                        </div>
                                        <div className="col-md-10">
                                            <div className="card-body">
                                                <div className="card-title ">{review.username}</div>
                                                <p className="card-text">
                                                    <Rating
                                                        name="simple-controlled"
                                                        value={review.rating} /> </p>
                                                <p className="card-text">{review.timeStamp}</p>
                                                <p className="card-text">{review.comment}</p>
                                            </div>
                                        </div>
                                        {
                                            userInfo.roleId === 3 ? <div className='col-md-1 d-flex align-items-center'>
                                                <button className='btn btn-outline-success '>Xoa</button>
                                            </div> : <div></div>
                                        }
                                    </div>
                                </div>
                            ))}


                        </div>



                    </div>

                </div>
            </div>
        </div>
    )
}
export default RateProduct