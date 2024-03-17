const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const port = process.env.POST || 5000;

// middleware
app.use(cors());
app.use(express.json());

app.get('/',(req, res) => {
    res.send('food is sitting')
})

app.listen(port, ()=>{
    console.log(`Food is on port ${port}`);
})