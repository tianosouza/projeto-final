const express = require('express');
require('dotenv').config();

const userRoutes = require('./infra/http/routes/userRoutes');
// const productRoutes = require('./infra/http/routes/productRoutes');

const app = express();
app.use(express.json());

app.use('/users', userRoutes);
// app.use('/products', productRoutes);

module.exports = app;
