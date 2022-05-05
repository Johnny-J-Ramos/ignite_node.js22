const express = require('express');
const { v4: uuidv4 } = require('uuid');
const app = express();

app.use(express.json());

const customers = [];



//Sobre os Middlewares: quando se faz necessário usar em outras rotas
// é legal usar ele "app.use(verifyExistsAccountCPF)"

//Middlewares
function verifyExistsAccountCPF(request, response, next) {
   const { cpf } = request.headers;

   const customer = customers.find(customer => customer.cpf === cpf)

   if(!customer) 
   return response.status(400).joson({ error:"Customer not found"});

   request.customer = customer;
   
   return next();
}

//Bançacete 
function getBalance(statement) {
  const balance = statement.reduce((acc, operation) => {
    if (operation.type === 'credit') {
      return acc + operation.amount;
    }else {
      return acc - operation.amount
    }
  }, 0)
  return balance;
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
app.get("/statement", verifyExistsAccountCPF, (request, response) => {
   const { customer } = request;
   return response.json(customer.statement);
});

//Realizar um depósito
app.post('/deposit', verifyExistsAccountCPF, (request, response) => {
   const { description, amount } = request.body;
   const { customer } = request;
   const statementOperation = {
     description,
     amount,
     created_at: new Date(),
     type: 'credit'
   };
 
   customer.statement.push(statementOperation);
 
   return response.status(201).send();
 });

//Realizar um saque
app.post('/withdraw', verifyExistsAccountCPF, (request, response) => {
  const {amount} = request.body;
  const {customer} = request;

  const balance = getBalance(customer.statement)

  if(balance < amount) {
    return response.status(400).json({error:"Insufficient funds!"})
  }
  const statementOperation = {
    amount,
    created_at: new Date(),
    type: 'debit'
  };

  customer.statement.push(statementOperation)

  return response.status(200).send()
})




app.listen(3333, () => {
  console.log('Server is up!')
});