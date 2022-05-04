const express = require('express');
const app = express();
const { v4: uuidv4 } = require('uuid')




/**
 * CPF - STRING
 * NAME - STRING
 * ID - UUID
 * STATEMENT []
 */

const customers = [];

//criação de uma conta
app.post("/account", (req, res) => {
   return res.json({})
})



app.listen(5000)