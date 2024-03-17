import React from "react";
import "./budgetForm.css";

const BudgetForm = () => {
    return (
        <div> <div className="budget-form"><p>Find best shopping list for your budget with AI</p></div>

        <div className="budget-form">    
            <form>
                <label>Budget</label>
                    <input type="number" name="minBudget" placeholder="min" />
                    <lable>-</lable>
                    <input type="number" name="maxBudget" placeholder="max" />
                
                <label>Items</label>
                <textarea rows="10" cols="50">
                </textarea>
                
                <button type="submit">Generate</button>
            </form>
        </div>

        </div>

    );
}

export default BudgetForm;