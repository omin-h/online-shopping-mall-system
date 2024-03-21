import React from "react";
import "./budgetForm.css";
import ai from '../assets/AI Logo.png';
import { useNavigate } from "react-router-dom";



const BudgetForm = () => {

    const navigate = useNavigate(); // Initialize useNavigate

    const handleClick = () => {
        navigate("/shoppingList"); // Navigate to "/shoppingList" when button is clicked
    };

    return (
        <div className="budget-form-fill"> <div className="budget-title"><p>Find best shopping list for your budget with AI</p></div>

        <div className="budget-form">    
            <form>
                <label className="bud-label">Budget</label>
                    <input type="number" name="minBudget" placeholder="min" className="minBox" />
                    <lable>-</lable>
                    <input type="number" name="maxBudget" placeholder="max" className="maxBox"/><br />
                
                <label className="bud-label2">Items</label>
                <textarea className="itemBox"
                 rows="10" cols="50">
                </textarea>
                <p className="small-pop">*add (,) between items</p>
                <br />
                
            </form>
        </div>

        <div className="bud-button-fill"><button type="button" onClick={handleClick} className="bud-button">Generate<img src={ai} alt="Button Image" className="ai-logo"></img></button></div>

        </div>

    );
}

export default BudgetForm;