const express = require('express')
const app = express()
const cors = require('cors');
const port = process.env.PORT || 5000;
const recipeData = require ('./data/data.json');
const singleRecipe = require ('./data/singleRecipe');



app.use(cors());

app.get ('/', (req, res)=>{
    res.send('chef is cooking')
});

app.get ('/data', (req, res)=>{
res.send (recipeData);
})

app.get ('/recipe', (req, res)=>{
res.send (singleRecipe);
})


app.get('/data/:id', (req, res)=>{
    const id = parseInt(req.params.id);
    const selectedData = recipeData.find(n=> n.id === id);
    res.send(selectedData);
})



app.get ('/recipe/:id', (req, res)=>{
    const id = req.params.id;
    console.log(id);   
    if(id === 0 ){
        res.send (singleRecipe)
    } else{
        const getData = singleRecipe.filter(r=> r.id ===id)    
        res.send(getData);        
    }    
})



app.listen(port, ()=>{
    console.log(`chef API is running on port: ${port}`);
})