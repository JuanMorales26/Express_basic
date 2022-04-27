//Usando objeto express
const express = require('express')
//App de Express
const app = express()
//Puerto en que vamos a ver nuestra app: Localhost:3000
const port = 3000

//path inicial, responderá a la url localhost:3000
app.get('/',(req,res)=>{
    res.send('Hello World!')
})

//Con esto inicializamos esta app
app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
})

//Respondiendo texto
//localhost:3000/launchx
app.get('/launchx',(req,res)=>{
    res.send('Bienvenido a launchx')
})

//Regresando un objeto
//localhost:3000/exploreInNode
app.get('/exploreInNode',(req,res)=>{
    const explorer = {
        name: "Explorer",
        msg: "Hello"
    }
    res.send(explorer)
})
//Query Params: Recibir parámetros por la url
//http://localhost:3000/explorers/juan