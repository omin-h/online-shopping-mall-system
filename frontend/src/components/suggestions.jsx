import React from "react";
import te1 from '../assets/testtest.png';
import gre from '../assets/green.png';
import ree from '../assets/red.png';
import gra from '../assets/gray.png';
import ble from '../assets/blue.png';
import grtt from '../assets/gryy.png';
import draaz from '../assets/draa.png';
import poo from '../assets/pup.png';
import woo from '../assets/rewe.png';




import './suggestions.css';

const Suggestion = () => {
    return (
        <div className="shops-fill">
                    <div className="shop1"><img src={te1} className="shop-logo1" alt="shop-logo"></img></div>
                    <div className="shop1"><img src={gre} className="shop-logo1" alt="shop-logo"></img></div>
                    <div className="shop1"><img src={ble} className="shop-logo1" alt="shop-logo"></img></div>
                    <div className="shop1"><img src={ree} className="shop-logo1" alt="shop-logo"></img></div>
                    <div className="shop1"><img src={gra} className="shop-logo1" alt="shop-logo"></img></div>
                    <div className="shop1"><img src={ble} className="shop-logo1" alt="shop-logo"></img></div>
                    <div className="shop1"><img src={grtt} className="shop-logo1" alt="shop-logo"></img></div>
                    <div className="shop1"><img src={draaz} className="shop-logo1" alt="shop-logo"></img></div>
                    <div className="shop1"><img src={poo} className="shop-logo1" alt="shop-logo"></img></div>
                    <div className="shop1"><img src={woo} className="shop-logo1" alt="shop-logo"></img></div>
                    

            </div>

    );
}

export default Suggestion;
