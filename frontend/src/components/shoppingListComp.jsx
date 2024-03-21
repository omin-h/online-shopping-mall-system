import React from "react";
import Tshirt from '../assets/polo-shirt.webp';
import Trouser from '../assets/trouser.jpg';
import Bottle from '../assets/bottle.jpg';
import Bag from '../assets/bag.jpg';
import Cart from '../assets/cart.png';
import Cart2 from '../assets/cart2.png';
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
                        <p className="list-item1-store">
                            <p className="list-item1-title">
                            Emerald Polo T-Shirt
                            </p>

                            <p className="list-item1-shop">
                            Emerald Store< br />
                            Lkr 5000
                            </p>
                            
                        </p>
                        <img src={Cart2} alt="Button Image" className="cart-logo2"></img>

                        
                        
                    </div>


                </div>

                <div className="list-item1">
                    <div className="list-item1-con">
                        <img src={Trouser} alt="onion" className="list-item1-img" />

                    </div>
                    <div className="list-item1-detail">
                    <p className="list-item1-store">
                            <p className="list-item1-title">
                            Jobbs Core Mens Fitted Chino Pant
                            </p>

                            <p className="list-item1-shop">
                            fashion bug< br />
                            Lkr 5000
                            </p>
                            
                        </p>
                        <img src={Cart2} alt="Button Image" className="cart-logo2"></img>

                        
                        
                    </div>


                </div>

                <div className="list-item1">
                    <div className="list-item1-con">
                        <img src={Bottle} alt="onion" className="list-item1-img" />

                    </div>
                    <div className="list-item1-detail">
                    <p className="list-item1-store">
                            <p className="list-item1-title">
                            2 litre Plastic Water Bottle with Straw and Time Markings
                            </p>

                            <p className="list-item1-shop">
                            Nolimit< br />
                            Lkr 5000
                            </p>
                            
                        </p>
                        <img src={Cart2} alt="Button Image" className="cart-logo2"></img>

                        
                        
                    </div>


                </div>

                <div className="list-item1">
                    <div className="list-item1-con">
                        <img src={Bag} alt="onion" className="list-item1-img" />

                    </div>
                    <div className="list-item1-detail">
                    <p className="list-item1-store">
                            <p className="list-item1-title">
                            Ez Access Trolley Bag with Secured TSA Lock
                            </p>

                            <p className="list-item1-shop">
                            RASPBERRY< br />
                            Lkr 5000
                            </p>
                            
                        </p>
                        <img src={Cart2} alt="Button Image" className="cart-logo2"></img>

                        
                        
                    </div>


                </div>
            </div>
            <div className="list-end">
                <div className="list-bud">
                    <p className="list-bud-title">
                        Total cost: Lkr 23000
                    </p>
                </div>

                <div className="list-but-fill"><button type="submit" className="list-but">Add to Cart<img src={Cart} alt="Button Image" className="cart-logo"></img></button></div>
            </div>

        </div>
    );
}

export default ShoppingListComp;