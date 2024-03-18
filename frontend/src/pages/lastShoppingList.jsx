import React from "react";
import Header from "../components/header";
import LastShoppingListComp from "../components/lastShoppingListComp";
import Footer from "../components/footer";

const lastShoppingList = () => {
    return (
        <div>    
            <Header />     
            <LastShoppingListComp />
            <Footer />
        </div>
    );
}

export default lastShoppingList;