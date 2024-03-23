import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import './shop.css';
import { message } from 'antd';

const Shop = () => {
    const [messageApi, contextHolder] = message.useMessage();

    const items = [
        {
            id: 1,
            name: 'Essential Backpack',
            description: 'Color: Black',
            price: 9500.00,
            image: 'https://incarnage.com/cdn/shop/files/DSC00084.jpg?crop=center&height=300&v=1709712558&width=300'
        }
    ];

    const onHandleAddToCart = (item) => {
        let cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
        if (cartItems && cartItems.length > 0) {
            const existingItem = cartItems.find(cartItem => cartItem.item.id === item.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cartItems.push({ item, quantity: 1 });
            }

        } else {
            cartItems = [{ item, quantity: 1 }];
        }
        localStorage.setItem('cartItems', JSON.stringify(cartItems));

        messageApi.open({
            type: 'success',
            content: 'Product Added to Cart',
        });
    };

    return (
        <div>
            <Header />
            <div className="shop-items" >
                {items.map(item => <div className="item" key={item.id}>
                    <img src={item.image} />
                    <div className="item-info">
                        <div>{item.name}</div>
                        <div>{item.description}</div>
                        <div>LKR {item.price.toFixed(2)}</div>
                        <button className="add-to-cart" onClick={() => onHandleAddToCart(item)}>Add to Cart</button>
                    </div>
                </div>)}
            </div>
            <Footer />
        </div>
    );

};

export default Shop;