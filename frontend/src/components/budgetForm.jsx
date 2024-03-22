import React, { useState } from "react";
import "./budgetForm.css";
import ai from '../assets/AI Logo.png';
import { useNavigate } from "react-router-dom";



const BudgetForm = () => {

    const [minBudget, setMinBudget] = useState('');
    const [maxBudget, setMaxBudget] = useState('');
    const [items, setItems] = useState('');
    const [itemsCount, setItemsCount] = useState(0);

    const navigate = useNavigate(); // Initialize useNavigate

    const handleClick = () => {
        navigate("/shoppingList"); // Navigate to "/shoppingList" when button is clicked
    };

    const handleItemsChange = (event) => {
        const inputItems = event.target.value;
        setItems(inputItems);
        setItemsCount(inputItems.length); // Update character count
    };

    const handleFormSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission behavior

        if (minBudget === '' || maxBudget === '' || items === '') {
            alert('All fields are required');
            return;
        }

        // Validate budget range
        if (minBudget < 2000 || maxBudget > 500000) {
            alert('Budget should be between Lkr 2000 and Lkr 500000');
            return;
        }

        // Validate items length
        if (itemsCount > 500) {
            alert('Items should not exceed 500 characters');
            return;
        }

        // Proceed with form submission or further actions
        handleClick();
    };

    return (
        <div className="budget-form-fill">
            <div className="budget-title">
                <p>Find best shopping list for your budget with AI</p>
            </div>

            <div className="budget-form">
                <form onSubmit={handleFormSubmit}>
                    <label className="bud-label">Budget</label>
                    <input
                        type="number"
                        name="minBudget"
                        placeholder="min"
                        className="minBox"
                        value={minBudget}
                        onChange={(e) => setMinBudget(e.target.value)}
                    />
                    <label>-</label>
                    <input
                        type="number"
                        name="maxBudget"
                        placeholder="max"
                        className="maxBox"
                        value={maxBudget}
                        onChange={(e) => setMaxBudget(e.target.value)}
                    />
                    <br />

                    <label className="bud-label2">Items</label>
                    
                    <textarea
                        className="itemBox"
                        rows="10"
                        cols="50"
                        value={items}
                        onChange={handleItemsChange}
                    ></textarea>

                    <div className="ca-cou">{itemsCount}/500</div>
                    <p className="small-pop">*add (,) between items</p>
                    
                    
                    <button type="submit" className="bud-button">
                        Generate
                        <img src={ai} alt="Button Image" className="ai-logo" />
                    </button>
                   
                </form>
            </div>
                    
        </div>
    );
};

    
export default BudgetForm;