import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import './shops.css';

const Shops = () => {
    return (
        <div>
            <Header />
            <div className="shops" >
                <p className="page-title mb-5">Shops</p>
                <a href="/shop/Carnage" className="shop">
                    <img src="https://scontent.fcmb2-2.fna.fbcdn.net/v/t39.30808-1/361216809_756095749853932_1995425212671243771_n.jpg?stp=dst-jpg_p200x200&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=2DfWP-WfdmkAX9oqBcB&_nc_ht=scontent.fcmb2-2.fna&oh=00_AfB7ypGCRiRug_Cr5RdkXNLFEzMYnZXGu6iI6-celjPxEQ&oe=66022422" />
                </a>
            </div>
            <Footer />
        </div>
    );

};

export default Shops;