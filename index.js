import express from 'express';
import { PORT } from './constants.js';

const app = express();

app.listen(PORT, (req, res) => {
    console.log(`Server is running on port ${PORT}`);
});

