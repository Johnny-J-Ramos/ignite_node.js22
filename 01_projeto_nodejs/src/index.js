const express = require('express');
const app = express();
const { v4: uuidn4 } = require('uuid')

app.use(express.json());
/**
 * CPF - STRING
 * NAME - STRING
 * ID - UUID
 * STATEMENT []
 */

const customers = [];

//criação de uma conta
app.post("/account", (req, res) => {
   const {cpf, name} = Request.body;
   const id = uuid.v4();
   customers.push({
      cpf,
      name,
      id,
      statement: []
   })
  
   return res.status(201).send()
})



app.listen(3333)