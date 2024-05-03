import { message } from 'antd';
import React from "react";
import { useParams } from 'react-router-dom';
import Footer from "../components/footer";
import Header from "../components/header";
import './shop.css';

const Shop = () => {
    // const [messageApi, contextHolder] = message.useMessage();
    const { name } = useParams();

    const shops = [
        {
            id: 'adi',
            name: 'Adidas',
            items: [
                {
                    id: 'adi1',
                    name: 'Essential Backpack',
                    description: 'Color: Black',
                    price: 9500.00,
                    image: 'https://incarnage.com/cdn/shop/files/DSC00084.jpg?crop=center&height=300&v=1709712558&width=300'
                },
            ]
        },
    ];

    const shop = shops.find(shop => shop.id === name);

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
        window.dispatchEvent( new Event('cartItems') )
        message.open({
            type: 'success',
            content: 'Product Added to Cart',
        });
    };

    return (
        <div>
            <Header />
            <div className="shop-items" >
                <p className="page-title mb-5">
                    <img src={`/src/assets/${name}.jpeg`} height={100} />
                    {/* <span style={{ paddingLeft: 20 }}>Carnage</span> */}
                </p>
                {shop?.items?.map(item => <div className="item" key={item.id}>
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