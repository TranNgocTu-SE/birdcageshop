import React from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { updateOrderStatus } from '../../redux/orderSlice';

const ManagerOrderDetail = () => {

    const { id } = useParams();
    const dispatch = useDispatch();

    return (
        <div className='container'>
            <div className='m-5'>
                <form >
                    <div className="form-group m-2">
                        <label htmlFor="formGroupExampleInput">Example label</label>
                        <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input" />
                    </div>
                    <div className="form-group m-2">
                        <label htmlFor="formGroupExampleInput2">Another label</label>
                        <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Another input" />
                    </div>
                    <div className='text-end'>
                        <button className='btn btn-outline-success me-3' onClick={() => dispatch(updateOrderStatus({ orderId: id, orderStatus: "Processing" }))}>Chấp nhận</button>
                        <button className='btn btn-outline-danger' onClick={() => dispatch(updateOrderStatus({ orderId: id, orderStatus: "Cancelled" }))}>Từ chối</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ManagerOrderDetail