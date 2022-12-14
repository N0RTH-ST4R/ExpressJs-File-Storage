//const data=require('./data.json')
const fs=require('fs')
const express=require('express')
const app=express()

const port=8080

var data=JSON.parse(fs.readFileSync('data.json'))

app.get("/",(req,res)=>{
    res.sendFile('data.json',{ root: __dirname })
})

function addFile(name){
    //FIX
    data.name={
        "data":fs.readFile('./'+name, 'utf8',()=>{})
    }
}

addFile("test")
console.log(data)

app.listen(port,()=>{
    console.log("Server on "+port)
})