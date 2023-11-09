import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'


const AddPromotion = () => {
    return (
        <div>
            <div className='d-flex'>
                <div className='w-auto'>
                    <Sidebar />
                </div>
                <div className='col'>
                    <div>
                        <Navbar />
                        <div className='container'>
                            <section className="vh-100 ">
                                <div className="row justify-content-center align-items-center h-100">
                                    <div className="col-12 col-lg-9 col-xl-7">
                                        <div className="card shadow-2-strong card-registration" style={{ borderRadius: "15px" }}>
                                            <div className="card-body p-4">
                                                <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Add Promotion</h3>
                                                <form>
                                                    <div className="col mb-2">
                                                        <div className="form-outline">
                                                            <input type="text" id="userName" name='username' className="form-control form-control-lg" />
                                                            <label className="form-label" htmlFor="userName">Tạo Mã</label>
                                                        </div>
                                                    </div>
                                                    <div className="col mb-2">
                                                        <div className="form-outline">
                                                            <input type="text" id="email" name='email' className="form-control form-control-lg" />
                                                            <label className="form-label" htmlFor="email">Giá trị giảm</label>
                                                        </div>

                                                    </div>

                                                    <div className="row">
                                                        <div className="col mb-2 d-flex align-items-center">

                                                            <div className="form-outline datepicker w-100">
                                                                <input type="text" name='address' className="form-control form-control-lg" id="birthdayDate" />
                                                                <label htmlFor="birthdayDate" className="form-label">Trạng thái</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col mb-2 pb-2">
                                                        <div className="form-outline">
                                                            <input type="tel" id="phoneNumber" name='phone' className="form-control form-control-lg" />
                                                            <label className="form-label" htmlFor="phoneNumber">Thời gian bắt đầu</label>
                                                        </div>
                                                    </div>
                                                    <div className="col mb-2 pb-2">
                                                        <div className="form-outline">
                                                            <input type="tel" id="phoneNumber" name='phone' className="form-control form-control-lg" />
                                                            <label className="form-label" htmlFor="phoneNumber">Thời gian kết thúc</label>
                                                        </div>
                                                    </div>
                                                    <div className="mt-2 pt-1">
                                                        <button className="btn btn-outline-success" type="submit">Điều kiện khuyến mãi</button>
                                                    </div>
                                                    <div className="mt-2 pt-1 text-end">
                                                        <button className="btn btn-outline-success" type="submit">Lưu</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AddPromotion