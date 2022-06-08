const express = require('express');
const res = require('express/lib/response');

const app = express();

app.get('/',(req,res)=>{
    return response.json({message:'Server is up'})
})

