const express = require('express')
const path = require('path')
const fs =require('fs')
const app = express()

// http://127.0.0.1:3000/file?id=1
app.get('/file',(req,res)=>{
    const id = req.query.id;
    const filepath = path.join(__dirname,'data',id+'.json');
    fs.readFile(filepath,{"encoding":'utf-8'},(err,result)=>{
        if(err){
            res.status(500)
            res.send(err)
        }else{
            res.status(200);
            res.send(JSON.parse(result));
        }
    })
})
app.listen(3000)