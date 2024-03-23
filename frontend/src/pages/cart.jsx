import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import CancelIcon from '@mui/icons-material/HighlightOff';
import Header from "../components/header";
import Footer from "../components/footer";
import { message } from 'antd';
import './cart.css'

function Cart() {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [messageApi, contextHolder] = message.useMessage();
    useEffect(() => {
        const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
        if (cartItems.length > 0) {
            const total = cartItems.reduce((acc, item) => acc + item.item.price * item.quantity, 0);
            setTotal(total);
            setCart(cartItems);
        }
    }, [])

    function clearCart() {
        localStorage.removeItem('cartItems');
        setCart([]);
        setTotal(0);
        messageApi.open({
            type: 'success',
            content: 'Cart cleared successfully',
          });
    }

    function removeItem(itemId) {
        const newCart = cart.filter(item => item.item.id !== itemId);
        const total = newCart.reduce((acc, item) => acc + item.item.price * item.quantity, 0);
        setCart(newCart);
        setTotal(total);
        localStorage.setItem('cartItems', JSON.stringify(newCart));
        messageApi.open({
            type: 'success',
            content: 'Product removed from cart successfully',
          });
    }

    return (
        <div>
            <Header />
            <div className="container-fluid">
                <div className="page-title mb-5">Shopping Cart</div>
                <div className="row">
                    <div className="col-xl-8 px-5">
                        <table className="table cart-table table-borderless">
                            <thead >
                                <tr>
                                    <th scope='col'>Product</th>
                                    <th scope='col'>Unit Price</th>
                                    <th scope='col'>Quantity</th>
                                    <th scope='col'>Subtotal</th>
                                    <th scope='col'></th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart?.map((product) => {
                                    return (
                                        <tr className='p-5 align-middle' key={product.item.id}>
                                            <td className='text-start'>
                                                <div className="row">
                                                    <div className="col-4">
                                                        <img alt='product' src={product.item.image}></img>
                                                    </div>
                                                    <div className="col-8">
                                                        <h4>{product.item.name}</h4>
                                                        <p>{product.item.description}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <p>LKR {product.item.price.toFixed(2)}</p>
                                            </td>
                                            <td>
                                                <p>{product.quantity}</p>
                                            </td>
                                            <td>
                                                <p>LKR {(product.item.price * product.quantity).toFixed(2)}</p>
                                            </td>
                                            <td>
                                                <IconButton aria-label="delete" onClick={() => removeItem(product.item.id)}>
                                                    <CancelIcon />
                                                </IconButton>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                        <div className="row">
                            <div className="col-6">
                                <Link to='/shop/Carnage'>
                                    <button className='mt-5 btn-fill'>
                                        Continue Shopping
                                    </button>
                                </Link>
                            </div>
                            <div className="col-6">
                                <button className='mt-5 btn-clear' onClick={() => clearCart(cart._id)} >
                                    Clear Cart
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 px-5">
                        <div className="cart-card">
                            <div className="title mb-5"> Cart Total </div>
                            <p> Total amount </p>
                            <h3> LKR {total.toFixed(2)} </h3>
                            <Link to={`/checkout`} >
                                <button className='mt-5 btn-checkout'> Proceed to checkout </button>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default Cart