import { Button, Checkbox, FormControlLabel, FormGroup, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import './checkout.css'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateField } from '@mui/x-date-pickers/DateField';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Header from "../components/header";
import Footer from "../components/footer";
import { message } from 'antd';

function Checkout() {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const navigate = useNavigate();
    const [messageApi, contextHolder] = message.useMessage();

    useEffect(() => {
        const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
        if (cartItems.length > 0) {
            const total = cartItems.reduce((acc, item) => acc + item.item.price * item.quantity, 0);
            setTotal(total);
            setCart(cartItems);
        }
    }, [])

    function handleCheckout(event) {
        event.preventDefault();
        const data = {
            products: cart,
            // userId: cart.userId,
            amount: total + 200
        }

        localStorage.removeItem('cartItems');
        setCart([]);
        setTotal(0);

        navigate('/');
        messageApi.open({
            type: 'success',
            content: 'Order successful',
        });
        // const config = {
        //     headers: {
        //         "content-Type": "application/json",
        //     }
        // };

        // await axios.post('http://localhost:5001/order/', data, config).then((res) => {
        //     alert("Order successful")
        //     navigate('/cart')
        // }).catch((error) => {
        //     alert(error.message)
        // })
    }
    return (
        <div>
            <Header />
            <div className="checkout-container mt-5">
                <p className="page-title mb-5">Checkout</p>
                <div className="checkout-card">
                    <div className="row">
                        <div className="col-xl-6 p-5">
                            <div style={{ border: '1px solid #D9D9D9', borderRadius: '8px' }} className="p-2 mb-5">
                                {cart?.map((product, key) => {
                                    return (
                                        <div key={key} className="row mb-2 align-items-center">
                                            <div className="col-xl-3">
                                                <img alt="product" width="100px" src={product.item.image} />
                                            </div>
                                            <div className="col-xl-9">
                                                <p className='mb-1'>{product.item.name}</p>
                                                <p className='mb-1'>{product.quantity}</p>
                                                <b>LKR {(product.quantity * product.item.price).toFixed(2)}</b>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="d-flex justify-content-between">
                                <p>Product Total</p>
                                <p>Rs.{total}.00</p>
                            </div>
                            <hr></hr>
                            <div className="d-flex justify-content-between">
                                <p>Service charges</p>
                                <p>Rs.200.00</p>
                            </div>
                            <hr></hr>
                            <div className="d-flex justify-content-between">
                                <b>Total</b>
                                <b>Rs.{total + 200}.00</b>
                            </div>
                        </div>
                        <div className="col-xl-6 card-right">
                            <p className='title mb-5'>Payment</p>
                            <div>
                                <img alt="master-card" width={'60px'} className="img-fluid mx-1" src="/images/MasterCard.png" />
                                <img alt="visa" width={'64px'} className="img-fluid mx-1" src="/images/VisaCard.png" />
                            </div>
                            <form onSubmit={handleCheckout}>
                                <TextField
                                    inputProps={{ style: { backgroundColor: 'white', borderRadius: '4px' } }}
                                    className="my-3" label="Name on card" size="small" variant="outlined" fullWidth required />
                                <TextField
                                    inputProps={{ style: { backgroundColor: 'white', borderRadius: '4px' } }}
                                    className="my-3" label="Card number" size="small" variant="outlined" fullWidth required />
                                <div className="row my-3">
                                    <div className="col-xl-4">
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DateField
                                                label="MM / YY"
                                                inputProps={{ style: { backgroundColor: 'white', borderRadius: '4px' } }}
                                                // value={value}
                                                // onChange={(newValue) => setValue(newValue)}
                                                format='MM/YY' required
                                            />
                                        </LocalizationProvider>
                                    </div>
                                    <div className="col-xl-4">
                                        <TextField
                                            inputProps={{ style: { backgroundColor: 'white', borderRadius: '4px' } }}
                                            label="CVV" size="large" variant="outlined" required
                                        />
                                    </div>
                                </div>
                                <TextField
                                    inputProps={{ style: { backgroundColor: 'white', borderRadius: '4px' } }}
                                    className="my-3" label="Email address" size="small" variant="outlined" fullWidth
                                    type='email' required
                                />
                                <TextField
                                    inputProps={{ style: { backgroundColor: 'white', borderRadius: '4px' } }}
                                    className="my-3" label="Discount Coupon" size="small" variant="outlined" fullWidth />
                                <FormGroup>
                                    <FormControlLabel
                                        value="end"
                                        control={<Checkbox color="default" required />}
                                        label="by confirming the order, I accept the terms of the user agreement"
                                        labelPlacement="end"
                                    />
                                </FormGroup>
                                <div className="my-3">
                                    <Button
                                        type='submit'
                                        size='large'
                                        className='mx-2'
                                        style={{ color: 'white', backgroundColor: '#01022e' }}
                                    >
                                        Checkout
                                    </Button>
                                    <Link to="/cart">
                                        <Button
                                            type='reset'
                                            size='large'
                                            className='mx-2'
                                            style={{ color: '#01022e', backgroundColor: 'transparent', border: '1px solid #01022e' }}
                                        >
                                            Cancel
                                        </Button>
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default Checkout