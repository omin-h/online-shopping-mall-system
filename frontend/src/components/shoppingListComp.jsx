import React from "react";
import Tshirt from '../assets/polo-shirt.webp';
import Trouser from '../assets/trouser.jpg';
import Bottle from '../assets/bottle.jpg';
import Bag from '../assets/bag.jpg';
import Cart from '../assets/cart.png';
import './shoppingListComp.css';

const ShoppingListComp = () => {
    return (
        <div>
            
            <div className="list-fill">
                <div className="list-item1">
                    <div className="list-item1-con">
                        <img src={Tshirt} alt="onion" className="list-item1-img" />
                    </div>
                    <div className="list-item1-detail">
                        <p className="list-item1-title">
                            Emerald Polo T-Shirt
                    
                        </p>
                        <p className="list-item1-price">
                            Lkr 5000
                        </p>
                    </div>


                </div>

                <div className="list-item2">
                    <div className="list-item2-con">
                        <img src={Trouser} alt="onion" className="list-item2-img" />

                    </div>


                </div>

                <div className="list-item3">
                    <div className="list-item3-con">
                        <img src={Bottle} alt="onion" className="list-item3-img" />

                    </div>


                </div>

                <div className="list-item4">
                    <div className="list-item4-con">
                        <img src={Bag} alt="onion" className="list-item4-img" />

                    </div>


                </div>
            </div>
            <div className="list-end">
                <div className="list-bud">
                    <p className="list-bud-title">
                        Total cost: Lkr 23000
                    </p>
                </div>

                <div className="list-button-fill"><button type="submit" className="list-button">Add to Cart<img src={Cart} alt="Button Image" className="cart-logo"></img></button></div>
            </div>

        </div>
    );
}

export default ShoppingListComp;