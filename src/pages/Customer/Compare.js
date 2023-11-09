import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { LC1, LC2} from '../../assets/Index'
import Popup from './Popup'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProduct } from '../../redux/productSlice'
import { data } from 'jquery'

const Compare = () => {

  const [detailProduct,setDetailProduct] = useState();
  const {id} = useParams();
  const dispatch = useDispatch();
  const { products, loading, product } = useSelector((state) => state.product);

  useEffect(() => {
    fetch(`https://localhost:44314/api/v1/products/idTmp?idTmp=${id}`)
        .then(res => res.json())
        .then(result => setDetailProduct(result))
}, [])

  return (
    <div>
      <Header />
      <div className='container mt-4'>
        <div className='row'>
          <div className='col-9'>
          </div>
          <div className='col-3 text-end'>
           <Popup/>
          </div>
        </div>
        <div className=' container d-flex flex-column min-vh-100 mt-3 text-center'>
          <table className="table table-bordered">
            <tbody>
              <tr>
                <td><img src={detailProduct?.image} width="200px" height="250px" /></td>
                <td><img src={product?.image} width="200px" height="250px" /></td>
              </tr>
              <tr>
                <td>{detailProduct?.productName}</td>
                <td>{product?.productName}</td>
              </tr>
              <tr>
                <td>{detailProduct?.productMaterial}</td>
                <td>{product?.productMaterial}</td>
              </tr>
              <tr>
                <td>{detailProduct?.size}</td>
                <td>{product?.size}</td>
              </tr>
              <tr>
                <td>Phụ kiện</td>
                <td>Phụ kiện</td>
              </tr>
              <tr>
                <td>{detailProduct?.color}</td>
                <td>{product?.color}</td>
              </tr>
              <tr>
                <td>{detailProduct?.price}</td>
                <td>{product?.price}</td>
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