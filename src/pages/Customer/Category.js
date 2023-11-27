import React from 'react'
import { getCategories } from '../../redux/categorySlice';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Shipping } from '../../assets/Index';
import { useEffect } from 'react';
import { getProductByCategory, getProducts } from '../../redux/productSlice';

const Category = () => {

    const dispatch = useDispatch();
    const { categories } = useSelector(state => state.category);

    useEffect(() => {
        dispatch(getCategories());
    }, [])

    return (
        <div>
            <div className="left-sidebar">
                <h2>Category</h2>
                <div className="panel-group category-products " id="accordian">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h4 className="panel-title"><a href="#" onClick={() => dispatch(getProducts())}>All</a></h4>
                        </div>
                    </div>
                    {categories?.map((category, index) => (
                        <div className="panel panel-default" key={index}>
                            <div className="panel-heading">
                                <h4 className="panel-title"><a href="#" onClick={() => dispatch(getProductByCategory(category.birdTypeId))}>{category.name}</a></h4>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="shipping text-center">
                    <img src={Shipping} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Category