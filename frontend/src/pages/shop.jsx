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
                    name: 'Shoes',
                    description: 'Color: White',
                    price: 9500.00,
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIc3gulqFqpdQA7hitfIQ6Y837KgORkOdAPLG-5gykkg&s'
                },
                {
                    id: 'adi2',
                    name: 'Essential Backpack',
                    description: 'Color: Black',
                    price: 9500.00,
                    image: 'https://assets.adidas.com/images/w_1880,f_auto,q_auto/b7beee7c32d4438aaba3acb6001c2e7b_9366/FY7757_01_standard.jpg'
                },

            ]
        },

        {
            id: 'aba',
            name: 'Abance',
            items: [
                {
                    id: 'aba1',
                    name: 'Dell laptop',
                    description: 'Color: Black',
                    price: 180000.00,
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdV1bHDrMniRNhgkhK5Xu3HCoRmgmlFLyiEGmh-S0WxQ&s'
                },
                {
                    id: 'aba2',
                    name: 'VIVO Y20',
                    description: 'Color: Blue',
                    price: 9500.00,
                    image: 'https://cdn.buyabans.com/media/catalog/product/cache/b26914b4315099761016f66ddcabadb6/n/e/new_proahjsu__sct.png'
                },
            ]
        },
        {
            id: 'bab',
            name: 'Baby Care',
            items: [
                {
                    id: 'bab1',
                    name: 'go cart stroller',
                    description: 'Color: Black',
                    price: 50000.00,
                    image: 'https://babycare.lk/wp-content/uploads/2021/06/babycare-ace-stroller-2.png'
                },
                {
                    id: 'bab2',
                    name: 'baby care product',
                    description: 'Color: blue and pink',
                    price: 9500.00,
                    image: 'https://softsensbaby.com/cdn/shop/files/Website_Banner_Kit.jpg?v=1669009361'
                },
            ]
        }, {
            id: 'calv',
            name: 'Calvin Klein',
            items: [
                {
                    id: 'calv1',
                    name: 'clavin klein t-shirt',
                    description: 'Color: brown and Blue',
                    price: 12000.00,
                    image: 'https://i.ebayimg.com/images/g/sNkAAOSw6nRibVdE/s-l1200.webp'
                },
                {
                    id: 'calv2',
                    name: 'clavin klein perfume',
                    description: 'Color: white ',
                    price: 19500.00,
                    image: 'https://objectstorage.ap-mumbai-1.oraclecloud.com/n/softlogicbicloud/b/cdn/o/products/80062764--1--1645173038.jpeg'
                },
            ]
        }, {
            id: 'jew',
            name: 'colombo jewellers',
            items: [
                {
                    id: 'jew1',
                    name: 'blue sapphire necklace',
                    description: 'Color: whitegold and gemstone',
                    price: 100000.00,
                    image: 'https://media.timeout.com/images/103721525/750/562/image.jpg'
                },
                {
                    id: 'jew2',
                    name: 'gold necklace',
                    description: 'Color: Gold',
                    price: 150000.00,
                    image: 'https://media.timeout.com/images/101903591/750/422/image.jpg'
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
        window.dispatchEvent(new Event('cartItems'))
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
                <div className="item-list">
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

            </div>
            <Footer />
        </div>
    );

};

export default Shop;