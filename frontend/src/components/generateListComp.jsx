const axios = require('axios');
import React from 'react';
import Loading from '../assets/loading.gif'; 

async function generateText(minBudget, maxBudget, items) {
    const prompt = `Minimum Budget: ${minBudget}, Maximum Budget: ${maxBudget}, Items: ${items}, Generate a list of items in database within the given budget.`;
    const apiKey = process.env.OPENAI_API_KEY;
    const apiUrl = "https://api.openai.com/v1/engines/davinci-codex/completions";

    try {
        const response = await axios.post(apiUrl, {
            prompt: prompt,
            max_tokens: 100,
            temperature: 0.7
        }, {
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            }
        });

        console.log(response.data.choices[0].text);
    } catch (error) {
        console.error(error);
    }

    return(
        <div>
            <img src={Loading} alt="Loading" />
        </div>
    )
}

generateText();