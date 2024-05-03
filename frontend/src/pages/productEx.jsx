import React, { useState } from 'react';

    const ProductEx = () => {
        const [modelNumber, setModelNumber] = useState('');
        const [title, setTitle] = useState('');
        const [price, setPrice] = useState('');
        const [image, setImage] = useState('');
        const [description, setDescription] = useState('');

        return (
            <div>
                <input type="text" value={modelNumber} onChange={(e) => setModelNumber(e.target.value)} placeholder="Model Number" />
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
                <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" />
                <input type="text" value={image} onChange={(e) => setImage(e.target.value)} placeholder="Image URL" />
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description"></textarea>
            </div>
        );
    };

    export default ProductEx;