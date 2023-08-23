const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')
const { exec } = require('child_process')

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req,res) =>{
    res.sendFile(__dirname +'/index.html');
})

app.post('/compile' , (req,res) =>{
    //res.send(`${JSON.stringify(req.body)}`)
    var data = req.body.code
    try{
        fs.writeFileSync('./data.c',data)
        exec("gcc data.c -o binary", (error,stdout,stderr) =>{
            if(stdout){
                res.send(`${stdout}`)
            }else if(stderr){
                res.send(`${stderr}`)
            }else {
            //res.send("code compiled!")
            res.sendFile(__dirname +"/binary", (err) =>{
                if(err){
                    console.log(err)
                }
            })
            }
        })
    }catch(e){
        console.log(e)
    }
})
app.listen(port, (req,res) =>{
    console.log(`listening on port ${port}`)
})

