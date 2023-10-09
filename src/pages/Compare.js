import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { SP1, SP2} from '../assets/Index'

const Compare = () => {
  return (
    <div>
      <Header />
      <div className='container mt-4'>
        <div className='row'>
          <div className='col-9'>
          </div>
          <div className='col-3'>
            <button className='btn btn-outline-success pull-right'>
              Chọn sản phẩm so sánh
            </button>
          </div>
        </div>
        <div className=' container d-flex flex-column min-vh-100 mt-3 text-center'>
          <table class="table table-bordered">
            <tbody>
              <tr>
                <td><img src={SP1} width="200px" height="250px" /></td>
                <td><img src={SP2} width="200px" height="250px" /></td>
              </tr>
              <tr>
                <td>Tên</td>
                <td>Tên</td>
              </tr>
              <tr>
                <td>Chất liệu</td>
                <td>Chất liệu</td>
              </tr>
              <tr>
                <td>Kích cỡ</td>
                <td>Kích cỡ</td>
              </tr>
              <tr>
                <td>Phụ kiện</td>
                <td>Phụ kiện</td>
              </tr>
              <tr>
                <td>Màu sắc</td>
                <td>Màu sắc</td>
              </tr>
              <tr>
                <td>Giá</td>
                <td>Giá</td>
              </tr>
            </tbody>
          </table>
        </div>
        
      </div>
      

      <Footer />
    </div>
  )
}

export default Compare