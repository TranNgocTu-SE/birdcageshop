import React, { useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { createReview } from '../../redux/reviewSlice'
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

const Review = () => {

    const { id } = useParams();
    const [review, setReview] = useState({});
    const { userInfo } = useSelector(state => state.auth);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleOnChange = (e) => {
        setReview({ ...review, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault(e);
        const newReview = {
            userId: userInfo.userId,
            productId: id,
            rating: parseInt(review.rating),
            comment: review.comment
        }
        dispatch(createReview(newReview));
        navigate("/order");
    }

    return (
        <div>
            <div className='container vh-100'>
                <form className='mt-5' onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlSelect1"><h6>Product reviews</h6></label>
                        <Box sx={{'& > legend': { mt: 2 },}}>
                            <Rating
                                name="rating"
                                value={review.rating || ""}
                                onChange={handleOnChange}
                            />
                        </Box>
                    </div>
                    <div className="form-group mt-4">
                        <label htmlFor="exampleFormControlTextarea1"><h6>What do you like or dislike about the product ?</h6></label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" onChange={handleOnChange} name='comment'></textarea>
                    </div>
                    <button type='submit' className='btn btn-outline-success pull-right mt-4'>Send</button>
                </form>
            </div>
        </div>
    )
}

export default Review