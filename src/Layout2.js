import React from 'react'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'

const Layout2 = () => {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    )
}

export default Layout2