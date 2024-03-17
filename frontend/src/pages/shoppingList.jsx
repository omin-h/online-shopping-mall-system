import React from "react";
import Header from "../components/header";
import ShoppingListComp from "../components/shoppingListComp";
import Footer from "../components/footer";

const shoppingList = () => {
    return (
        <div>    
            <Header />     
            <ShoppingListComp />
            <Footer />
        </div>
    );
}

export default shoppingList;