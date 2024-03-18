import React, { useEffect, useState } from "react";
import Header from "../components/header";
import Chatbot from "../components/chatbot";


const CustomerSupport = () => {
    return (
        <div>
            <Header />
            <h2>Customer Support</h2>
            <Chatbot />
        </div>
    );
}

export default CustomerSupport;