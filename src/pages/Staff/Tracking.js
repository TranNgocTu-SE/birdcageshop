import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateOrderStatus } from '../../redux/orderSlice';
import { useNavigate } from 'react-router-dom';

const Tracking = (props) => {

    const [isSelected, setIsSelected] = useState();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleOnChange = (e) => {
        setIsSelected(e.target.value);
    }

    useEffect(() => {
        fetch(`http://20.197.41.167/api/v1/orders/orderId?idTmp=${props.id}`)
            .then(res => res.json())
            .then(result => setIsSelected(result.orderStatus));

    }, [])

    const handleUpdate = () => {
        console.log({ orderId: props.id, orderStatus: isSelected });
        dispatch(updateOrderStatus({ orderId: props.id, orderStatus: isSelected }))
        navigate("/staffOrder")
    }



    return (
        <div>
            <div className='mt-5  border border-2 rounded-4 p-4'>
                <div>Tracking Order</div>
                <div className='mt-5 d-flex'>
                    <div className="container py-2 h-100">
                        <div className="row d-flex justify-content-center">
                            <div className="col">
                                <div className="card card-stepper" style={{ borderRadius: "10px" }}>
                                    <div className="card-body">
                                        <div className="d-flex flex-row justify-content-between align-items-center align-content-center">
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" value={"Pending"} id="flexRadioDefault1" onChange={handleOnChange} checked={isSelected === 1} />
                                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                </label>
                                            </div>
                                            <hr className="flex-fill track-line" />
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" value={"Processing"} id="flexRadioDefault1" onChange={handleOnChange} checked={isSelected === 2} />
                                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                </label>
                                            </div>
                                            <hr className="flex-fill track-line" />
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" value={"Shipped"} id="flexRadioDefault1" onChange={handleOnChange} checked={isSelected === 3} />
                                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                </label>
                                            </div>
                                            <hr className="flex-fill track-line" />
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" value={"Delivered"} id="flexRadioDefault1" onChange={handleOnChange} checked={isSelected === 4} />
                                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                </label>
                                            </div>
                                            <hr className="flex-fill track-line" />
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" value={"Cancelled"} id="flexRadioDefault1" onChange={handleOnChange} checked={isSelected === 5} />
                                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                </label>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-row justify-content-between align-items-center">
                                            <div className="d-flex flex-column align-items-start">
                                                <span>Pending</span>
                                            </div>
                                            <div className="d-flex flex-column justify-content-center">
                                                <span>Processing</span></div>
                                            <div className="d-flex flex-column justify-content-center align-items-center">
                                                <span>Shipped</span></div>
                                            <div className="d-flex flex-column align-items-center">
                                                <span>Delivered</span></div>
                                            <div className="d-flex flex-column align-items-end">
                                                <span>Cancelled</span></div>
                                        </div>
                                    </div>
                                </div>
                                <div className='text-end'>
                                    <div className='btn btn-outline-success mt-4' onClick={() => handleUpdate()}>Update</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tracking