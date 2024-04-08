import React, { useState } from "react";
import "./budgetForm.css";
import ai from '../assets/AI Logo.png';
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

const BudgetForm = () => {

    const [minBudget, setMinBudget] = useState('');
    const [maxBudget, setMaxBudget] = useState('');
    const [items, setItems] = useState('');
    const [itemsCount, setItemsCount] = useState(0);

    const navigate = useNavigate(); // Initialize useNavigate

    const handleClick = (minBudget, maxBudget, items) => {
        navigate("/shoppingList", { state: { minBudget, maxBudget, items } }); // Pass values as props when navigating
    };

    const handleItemsChange = (event) => {
        const inputItems = event.target.value;
        setItems(inputItems);
        setItemsCount(inputItems.length); // Update character count
    };

    const handleFormSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission behavior

        if (minBudget === '' || maxBudget === '' || items === '') {
            Swal.fire({
                icon: "warning",
                text: "All fields are required",
              });
            return;
        }

        if(+minBudget > +maxBudget){
            Swal.fire({
                icon: "warning",
                text: "Minimum budget should be less than Maximum budget",
              });
            return;
        }

        // Validate budget range
        if (minBudget < 2000 || maxBudget > 500000) {
            Swal.fire({
                icon: "warning",
                text: "Budget should be between Rs.2000 and Rs.500000",
              });
            
            return;
        }

        // Validate items length
        if (itemsCount > 500) {
            Swal.fire({
                icon: "warning",
                text: "Items should not exceed 500 characters",
              });
            return;
        }

        // Proceed with form submission or further actions
        handleClick(minBudget, maxBudget, items);
    };

    return (
        <div className="budget-form-fill">
            <div className="budget-title">
                <p>Find best shopping list for your budget with AI</p>
            </div>

            <div className="budget-form">
                <form onSubmit={handleFormSubmit}>
                    <label className="bud-label">Budget(Rs)</label>
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