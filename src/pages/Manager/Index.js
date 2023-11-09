import React from 'react'
import Sidebar from './Sidebar'
import HomeAdmin from './HomeAdmin'
import { NavLink, Route, Router, Routes } from 'react-router-dom'
import User from './User'

const Index = () => {
    return (
        <div className='d-flex'>
            <div className='w-auto'>
                <Sidebar />
            </div>
            <div className='col'>
            </div>
        </div>
    )
}

export default Index