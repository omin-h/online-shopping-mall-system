const axios = require('axios');
import React from 'react';

async function generateText() {
    const prompt = "Write your prompt here";
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
}

generateText();