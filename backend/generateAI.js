const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const { configuration, OpenAI } = require('openai');

const config = new configuration({
    apiKey: "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",
    });

const openai = new OpenAI(config);

//setup server
const app = express();
app.use(cors());
app.use(bodyParser.json());

// endpoints for chatgpt
app.post('/chatgpt', async (req, res) => {
    const { prompt } = req.body;

    const completion = await openai.createCompletion({
        engine: "text-davinci-003",
        prompt: prompt,
        maxTokens: 512,
        temperature: 0,
    });

    res.json({ completion: completion.data.choices[0].text });
});