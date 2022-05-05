const express = require('express');
const { v4: uuidv4 } = require('uuid');

const app = express();

app.use(express.json());

const customers = [];


//Middlewares
function verifyExistsAccountCPF(req, res, next) {
   const { cpf } = request.params;

  customer = customers.find((customer) => customer.cpf === cpf)

  if(!customer) {
   return response.status(400).joson({error:"Customer not found"})
}
   return next()
}

//Criando uma conta com um único cpf
app.post('/account', (request, response) => {
  const { cpf, name } = request.body;

  const customerAlreadyExistis = customers.some(
    (customer) => customer.cpf === cpf
  );

  if(customerAlreadyExistis) {
    return response.status(400).json({ error: "Customer already exists" })
  }

  customers.push({
    cpf,
    name,
    id: uuidv4(),
    statement: []
  });

  return response.status(201).send();
});

//Consultar extrato
app.get('/statement/:cpf', verifyExistsAccountCPF, (request, response) => {
  return response.status(200).json(customer.statement);
});





app.listen(3333, () => {
  console.log('Server is up!')
});