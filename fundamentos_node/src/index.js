const express = require('express');
const app = express()
const path = require('path')

const alunos = []


//Buscar uma informação dentro do servidor
app.get('/curses', (req, res) => {
    return res.json([
        "Curse 01",
        "Curse 02",
        "Curse 03"
    ]) 
})

//Inserir uma informação no servidor 
app.post('/courses/id', (req, res) => {
    return res.json([
        "Curse 01",
        "Curse 02",
        "Curse 03",
        "Curse 04"
        
    ]) 
})

//CONFIGURAÇÃO DO PROJETO

const insommine = 'insomine'


//PUT Alterar uma informação no servidor
app.put('/courses/id', (req, res) => {
    return res.json([
        "Curse 1",
        "Curse 2",
        "Curse 3",
        "Curse 4"
    ])
})

//PATCH Alterar uma informação especifíca 

app.path('/courses/id', (req, res) => {
    return res.json([
        "Curse 11",
        "Curse 2",
        "Curse 3",
        "Curse 4"
    ])
} )

// DELETE Deletar uma inforamação no servidor

app.delete('/courses/id', (req, res ) => {
    return res.json([
        "Curse 11",
        "Curse 2",
        "Curse 3"
    ])
})


app.listen(3333)