const express = require('express')
const app = express()
const cors = require('cors');
const port = process.env.PORT || 5000;
const singleRecipe = require ('./data/singleRecipe.json');
const data = require ('./data/data.json');



app.use(cors());

app.get ('/', (req, res)=>{
    res.send('chef is cooking')
});

app.get ('/singleRecipe', (req, res)=>{
res.send (singleRecipe);
})

app.get ('/data', (req, res)=>{
res.send (data);
})


app.get('/data/:id', (req, res)=>{
    const id = req.params.id;    
    const selectedData = data.find(n=> n.id === id);
    res.send(selectedData);
})



// app.get ('/data/:id', (req, res)=>{
//     const id = parseInt(req.params.id);
//     console.log(id);   
//     if(id === 0 ){
//         res.send (data)
//     } else{
//         const getData = data.filter(r=> parseInt(r.id) === id)    
//         res.send(getData);        
//     }    
// })

app.get ('/singleRecipe/:id', (req, res)=>{
    const id = parseInt(req.params.id);
    console.log(id);   
    if(id === 0 ){
        res.send (data)
    } else{
        const getData = data.filter(r=> parseInt(r.id) === id)    
        res.send(getData);        
    }    
})


app.listen(port, ()=>{
    console.log(`chef API is running on port: ${port}`);
})