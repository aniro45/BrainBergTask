import dotenv from 'dotenv';
dotenv.config();
import app from './app.js';
import Initializer from './serviceInitializer.js';

import { connectToMongoDataBase } from './dbconfig.js';
connectToMongoDataBase();
new Initializer();

const port = process.env.PORT || 8080; 
app.listen(port, (req, res) => {
    console.log(`Server is running on port ${port}`);
});