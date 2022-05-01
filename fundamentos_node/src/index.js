const express = require('express');
const app = express()
const path = require('path')

const db = require('../database/db')

//Conectando com o banco de dados
const alunos = []

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
    return res.json([
        name = "cadastrar",
        age =  26,
    ])
})

app.listen(3333, () => {
    console.log("Server started")
})