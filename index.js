const express = require('express')
const app = express()
const cors = require('cors');
const port = process.env.PORT || 5000;
const recipeData = require ('./data/data.json');
const singleRecipe = require ('./data/singleRecipe.json');



app.use(cors());

app.get ('/', (req, res)=>{
    res.send('chef is cooking')
});

app.get ('/recipeData', (req, res)=>{
res.send (recipeData);
})

app.get ('/singleRecipe', (req, res)=>{
res.send (singleRecipe);
})


app.get('/singleRecipe/:id', (req, res)=>{
    const id = req.params.id;    
    const selectedData = singleRecipe.find(n=> n.id === id);
    res.send(selectedData);
})



app.get ('/recipeData/:id', (req, res)=>{
    const id = parseInt(req.params.id);
    console.log(id);   
    if(id === 0 ){
        res.send (recipeData)
    } else{
        const getData = recipeData.filter(r=> parseInt(r.id) === id)    
        res.send(getData);        
    }    
})



app.listen(port, ()=>{
    console.log(`chef API is running on port: ${port}`);
})