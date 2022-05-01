const express = require('express');
const app = express()
const path = require('path')
const db = require('../database/db')
const User = require('../database/User')


app.use(express.json())

//Buscar uma informação dentro do servidor
app.get('/curses', async (req, res) => {
    return res.json([
        "Curse 01",
        "Curse 02",
        "Curse 03"
    ]) 
})

//Inserir uma informação no servidor 
app.post('/cadastrar', async (req, res) => {
    console.log(req.body)

    await User.create(req.body)
    .then(() => {
        return res.json({
            erro: false,
            mansagem: "Usuário cadastrado com sucesso!"
        })
    }).catch(() => {
        return res.status(400).json({
            erro: true,
            mansagem: "Usuário não cadastrado com sucesso!"
        })
    });

    //res.send('Pagina cadastrar')
})


app.listen(3333, () => {
    console.log("Server started")
})