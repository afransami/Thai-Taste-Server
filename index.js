const express = require('express')
const app = express()


const port = process.env.PORT || 5000;

const data = require ('./data/data.json');



app.get ('/', (req, res)=>{
    res.send ('Dragon is running')
});

app.get ('/data', (req, res)=>{
res.send (data);
})


app.get ('/data/:id', (req, res)=>{
    const id = parseInt(req.params.id);
    console.log(id);   
    if(id === 0 ){
        res.send (data.data)
    } else{
        const newdata = data.filter(n=> parseInt(n.id) ===id)    
        res.send(newdata);
    }    
})


app.listen(port, ()=>{
    console.log(`Dragon API is running on port: ${port}`);
})