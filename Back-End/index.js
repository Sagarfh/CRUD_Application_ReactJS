import { error } from 'console';
import express, { response } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';

import route from './route/routes.js';

const app = express();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/users', route);


const PORT = 4000;
const URL = 'mongodb+srv://admin:admin@basiccrud.g1uij.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    app.listen(PORT, () => {
        console.log(`server is running on port ${PORT}`);
    });
}).catch(error => {
    console.log('Error : ', error.message);
})
