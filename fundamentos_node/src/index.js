const express = require('express');
const app = express()
const path = require('path')
const db = require('../database/db')
const User = require('../database/User')

app.use(express.json())

/* 
    * GET - Buscar uma informação dentro do Servidor
    * POST - Inserir uma informação no Servidor
    * PUT - Alterar uma informação do Servidor
    * PATCH - Alterar uma informação especifica
    * DELETE - Deletar uma informação no Servidor

    * Tipos de parâmetros 
    
    - Route Params => Indentificar um recurso editar/deletar/buscar
    - Query Params => Paginação Filtro
    - Body Parms => Os objetos inserção/alteração /(JSON)
*/


//Buscar uma informação dentro do servidor
app.get('/courses', async (req, res) => {
    return res.json([
        "Curse 01",
        "Curse 02",
        "Curse 03"
    ]) 
})

app.post('/courses', (req, res) => {
    const body = request.body;
    console.log(body)
    return res.json([
        "Curse 01",
        "Curse 02",
        "Curse 03"
    ]) 
})

//Inserir uma informação no servidor 



app.put('/courses/:id', async (req, res) => {
    const params = request.params
})

app.listen(3333, () => {
    console.log("Server started")
})