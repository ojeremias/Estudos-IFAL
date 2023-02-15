const express = require('express');

const app = express()
app.use(express.json());

app.get('/homepage', (req, res) =>{

    res.send({
        message: "My mon don't like you!"
    });
});

app.get('/details', (req, res) =>{
    res.send({
        message: "Hello mon"
    });
});

app.post('/intervalo', (req, res) =>{
    const request = req.body;

    res.send({
        request
    });
});

app.listen(9000, () =>{
    console.log("Alrigth, i'm listen!")
})