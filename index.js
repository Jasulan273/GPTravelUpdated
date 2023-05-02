const { Configuration, OpenAIApi } = require('openai');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

const config = new Configuration({
    apiKey: process.env.API_TOKEN
});

const openai = new OpenAIApi(config);

// Path to the text file to use as prompt
const filePath = './data.txt';

app.get('/', (req, res) => {
    res.sendFile('./index.html');
});

app.post('/message', async (req, res) => {
    const fileContent = fs.readFileSync(filePath, 'utf8');

    const prompt = `${fileContent} ${req.body.message}`;

    const response = openai.createCompletion({
        model: 'gpt-3.5-turbo',
        prompt: prompt,
        temperature: 0,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
        max_tokens: 256
    });

    response.then((data) => {
        const message = { message: data.data.choices[0].text };
        res.send(message);
    }).catch((err) => {
        res.send(err);
    });
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});
