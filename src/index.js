import express from 'express';
import axios from 'axios';
import { configDotenv } from 'dotenv';

configDotenv();

const server = express();
const port = process.env.PORT || 3000;

server.get('/recovery', async (req, res) => {
    try {
        const response = await axios.get(process.env.API_MAIN);
        res.status(200).json(response.data);
    } catch (error) {
        try {
            const fallbackResponse = await axios.get(process.env.API_RESPALDO);
            res.status(200).json(fallbackResponse.data);
        } catch (fallbackError) {
            res.status(500).json({ error: "Algo salió mal" });
        }
    }
});

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});