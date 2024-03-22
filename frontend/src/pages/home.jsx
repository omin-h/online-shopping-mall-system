import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Banner from '../assets/banner.jpg';
import aiIcon from '../assets/AI Logo.png';
import Shops from '../components/shops';
import './home.css';

const Home = () => {

    return (
        <div>
            <Header />
            <img src={Banner} alt="Banner Image" className="banner-image" />
            <div className="AI-banner">
                <p className="AI-banner-text">Make your shopping list with AI</p>
                <img src= {aiIcon} alt="AI Icon" className="AI-banner-icon"/>
                <a href="/budget" class="AI-but">Try now</a>           
            </div>

            <Shops />         

            <Footer />
        </div>
    );

};

export default Home;