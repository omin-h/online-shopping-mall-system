import React, { useState } from 'react';
import axios from 'axios';

const ProductEx = () => {
    const [itemNo, setItemNo] = useState('');
    const [productTitle, setproductTitle] = useState('');
    const [productPrice, setproductPrice] = useState('');
    const [productImage, setProductImage] = useState('');
    const [productDescription, setproductDescription] = useState('');

   

    const handleSubmit = () => {
        const data = {
            itemNo,
            productTitle,
            productPrice,
            productImage,
            productDescription
        };

        axios.post('http://localhost:5555/shopProduct/createShopProduct', data)
            .then(response => {
                console.log(response.data);
                // Do something with the response if needed
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    

    return (
        <div>
            <input type="text" value={itemNo} onChange={(e) => setItemNo(e.target.value)} placeholder="Item No" />
            <input type="text" value={productTitle} onChange={(e) => setproductTitle(e.target.value)} placeholder="product Title" />
            <input type="number" value={productPrice} onChange={(e) => setproductPrice(e.target.value)} placeholder="Product Price" />
            <input type="string" value={productImage} onChange={(e) => setProductImage(e.target.value)} placeholder="Image URL" />
            <textarea value={productDescription} onChange={(e) => setproductDescription(e.target.value)} placeholder="Product Description"></textarea>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default ProductEx;
