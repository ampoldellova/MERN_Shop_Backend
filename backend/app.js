const express = require('express');
const app = express();
const products = require('./routes/product');
const auth = require('./routes/auth');
const order = require('./routes/order');
const cors = require('cors')
const cookieParser = require('cookie-parser')

app.use(cors())
app.use(express.json());
app.use(cookieParser());

app.use('/api/v1', products);
app.use('/api/v1', auth);
app.use('/api/v1', order);

module.exports = app