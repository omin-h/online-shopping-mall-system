import React, { useState } from "react";
import "./budgetForm.css";
import ai from '../assets/AI Logo.png';
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";



const BudgetForm = () => {

    const navigate = useNavigate();

    const [minBudget, setMinBudget] = useState('');
    const [maxBudget, setMaxBudget] = useState('');
    const [items, setItems] = useState('');
    const [itemsCount, setItemsCount] = useState(0);



        async function callOpenAi() {

            const ApiBody = {
                "model": "gpt-3.5-turbo",
                "messages": [{
                    "role": "system",
                    "content": `Prompt: Here are all the items available in our store:
                                - Item No: '01', Item Name: 'Black Cap for men', Item Price: '1200'
                                - Item No: '02', Item Name: 'Black T-shirt for men', Item Price: '5200'
                                - Item No: '03', Item Name: '1200ltr Water Bottle', Item Price: '750'
                                - Item No: '04', Item Name: 'White Sneaker Shoe', Item Price: '8200'
                                - Item No: '05', Item Name: 'Black Formal Shoe', Item Price: '6200'
                                Generate a shopping list and display only the item numbers for a budget between ${minBudget} to ${maxBudget} with the following items: ${items}. and response only should have numbers`
                }],
                "max_tokens": 60,
                "temperature": 0,
                "top_p": 1.0,
                "frequency_penalty": 0.0,
                "presence_penalty": 0.0
            };

        await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${API_KEY}`,
            },
            body: JSON.stringify(ApiBody),

        }).then((data) => {
            return data.json();
        }).then((data) => {
            console.log(data);

            navigate('/shoppingList', { state: { shoppingList: data.choices[0].message.content } });
        });
    }

    const handleItemsChange = (event) => {
        const inputItems = event.target.value;
        setItems(inputItems);
        setItemsCount(inputItems.length); // Update character count
    };

    const handleFormSubmit = (event, minBudget, maxBudget, items) => {
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

        callOpenAi();
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