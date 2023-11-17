import React, { useEffect } from 'react'
import { LC8, LC9 } from '../../assets/Index'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, clearCart, decreaseCart, getTotal, removeFromCart } from '../../redux/cartSlice'

const ShoppingCart = () => {


    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTotal());
    }, [cart])

    const handleRemoveFromCart = (cartItem) => {
        dispatch(removeFromCart(cartItem));
    }

    const handleDecreaseCart = (cartItem) => {
        dispatch(decreaseCart(cartItem));
    }

    const handleIncreaseCart = (cartItem) => {
        dispatch(addToCart(cartItem));
    }

    const handleClearCart = () => {
        dispatch(clearCart())
    }

    return (
        <div>
            <Header />
            <section className="vh-100 bg-white">
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col">
                            <p><span className="h2">Shopping Cart </span><span className="h4">(1 item in your cart)</span></p>
                            {cart.cartItems.length === 0 ? (
                                <div>
                                    <p>your cart is empty</p>
                                </div>
                            ) : (
                                cart.cartItems?.map((cartItem, index) => (
                                    <div className="card mb-4" key={index}>
                                        <div className="card-body p-2">
                                            <div className="row align-items-center">
                                                <div className="col-md-2">
                                                    <img src={cartItem.image}
                                                        className="img-fluid" alt="Generic placeholder image" style={{ height: "150px" }} />
                                                </div>
                                                <div className="col-md-2 d-flex justify-content-center">
                                                    <div>
                                                        <p className="small  mb-2 pb-2">Name</p>
                                                        <p className="lead fw-normal mb-0">{cartItem.productName}</p>
                                                    </div>
                                                </div>
                                                <div className="col-md-2 d-flex justify-content-center">
                                                    <div>
                                                        <p className="small mb-2 pb-2">Color</p>
                                                        <p className="lead fw-normal mb-0"><i className="fas fa-circle me-2" style={{ color: "#fdd8d2" }}></i>
                                                            {cartItem.color}</p>
                                                    </div>
                                                </div>
                                                <div className="col-md-2 d-flex justify-content-center">
                                                    <div>
                                                        <p className="small mb-2 pb-2">Quantity</p>
                                                        <div className='d-flex'>
                                                            <button className='btn btn-outline-success py-0 my-2 me-3' onClick={() => handleDecreaseCart(cartItem)}><i className="bi bi-dash"></i></button>
                                                            <p className="lead fw-normal mb-0">{cartItem.cartQuantity}</p>
                                                            <button className='btn btn-outline-success py-0 my-2 ms-3' onClick={() => handleIncreaseCart(cartItem)}><i className="bi bi-plus"></i></button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-1 d-flex justify-content-center">
                                                    <div>
                                                        <p className="small mb-2 pb-2">Price</p>
                                                        <p className="lead fw-normal mb-0">{cartItem.price * cartItem.cartQuantity}</p>
                                                    </div>
                                                </div>

                                                <div className="col-md-2 d-flex justify-content-center">
                                                    <div>
                                                        <p className="small mb-2 pb-2">Total</p>
                                                        <p className="lead fw-normal mb-0">{cartItem.price * cartItem.cartQuantity}</p>
                                                    </div>
                                                </div>
                                                <div className="col-md-1 d-flex justify-content-center">
                                                    <div>
                                                        <button className='btn btn-outline-success' onClick={() => handleRemoveFromCart(cartItem)}>Xoa</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )
                            }
                            {cart.cartItems.length === 0 ? <div></div> :
                                <div className="card mb-5">
                                    <div className="card-body p-4">
                                        <div className="float-end">
                                            <p className="mb-0 me-5 d-flex align-items-center">
                                                <span className="small text-muted me-2">Order total:</span> <span
                                                    className="lead fw-normal">{cart.cartTotalAmount}</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            }
                            <div className='row'>
                                <div className='col-2'>
                                    {cart.cartItems.length === 0 ? <div></div> :
                                        <div>
                                            <button className="btn btn-outline-success" onClick={() => handleClearCart()}>Clear Cart</button>
                                        </div>
                                    }
                                </div>
                                <div className='col d-flex justify-content-end'>
                                    <NavLink to="/" className="btn btn-outline-success me-2">Continue shopping</NavLink>
                                    {cart.cartItems.length === 0 ? <div></div> :
                                        <NavLink to="/checkout" className="btn btn-outline-success ">Checkout</NavLink>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default ShoppingCart