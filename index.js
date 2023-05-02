const express = require('express')
const app = express()
const cors = require('cors');
const port = process.env.PORT || 5000;
const recipeData = require ('./data/data.json');

app.use(cors());

app.get ('/', (req, res)=>{
    res.send('chef is cooking')
});

app.get ('/data', (req, res)=>{
res.send (recipeData);
})



app.listen(port, ()=>{
    console.log(`chef API is running on port: ${port}`);
})