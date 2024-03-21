import React, { useEffect, useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Banner from '../assets/banner.jpg';
import './home.css';

const Home = () => {

    return (
        <div>
            <Header />
            <img src={Banner} alt="Banner Image" className="banner-image" />

            


            <Footer />
        </div>
    );

};

export default Home;