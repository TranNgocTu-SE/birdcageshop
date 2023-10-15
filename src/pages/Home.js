import React from 'react'
import Header from '../components/Header'
import Promotion from '../components/Promotion'
import Products from '../components/Products'
import Footer from '../components/Footer'
import Pagination from '../components/Pagination'

const Home = () => {
  return (
    <div className='min-vh-100'>
         <Header />
         <Promotion />
         <Products />
         <Pagination />
         <Footer />
    </div>
  )
}

export default Home