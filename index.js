const bodyParser = require('body-parser');
const express = require('express');
const app = express();
require('dotenv').config();
require('./models/db');
const cors=require('cors');

const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(cors());



app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
});