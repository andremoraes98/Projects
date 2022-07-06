const express = require('express');

const app = express();
const ControllersProducts = require('./controllers/controllerProducts');
const MiddlewaresProducts = require('./middlewares/middlewareProducts');
const ControllersSales = require('./controllers/controllerSales');
const MiddlewaresSales = require('./middlewares/middlewareSales');

app.use(express.json());

app.get('/products', ControllersProducts.getAll);

app.get('/products/search', ControllersProducts.searchByTerm);

app.get('/products/:id', ControllersProducts.getById);

app.post('/products',
  MiddlewaresProducts.validateName,
  MiddlewaresProducts.validateNameLength,
  ControllersProducts.create);

app.post('/sales',
  MiddlewaresSales.validateProductId,
  MiddlewaresSales.validateQuantity,
  MiddlewaresSales.validateQuantityLength,
  MiddlewaresSales.validateIfProductExists,
  ControllersSales.create);

app.get('/sales', ControllersSales.getAll);

app.get('/sales/:id',
  MiddlewaresSales.validateIfSalesIdExists,
  ControllersSales.getById);

app.put('/products/:id',
  MiddlewaresProducts.validateName,
  MiddlewaresProducts.validateNameLength,
  MiddlewaresProducts.validateId,
  ControllersProducts.update);

app.delete('/products/:id',
  MiddlewaresProducts.validateId,
  ControllersProducts.deleteById);

app.delete('/sales/:id',
  MiddlewaresSales.validateIfSalesIdExists,
  ControllersSales.deleteById);

app.put('/sales/:id',
  MiddlewaresSales.validateProductId,
  MiddlewaresSales.validateQuantity,
  MiddlewaresSales.validateQuantityLength,
  MiddlewaresSales.validateIfProductExists,
  MiddlewaresSales.validateIfSalesIdExists,
  ControllersSales.updateById);

app.listen(3000, () => {
  console.log('Rodando na porta 3000');
});