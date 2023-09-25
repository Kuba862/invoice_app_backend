const express = require('express');
const path = require('path');
const cors = require('cors');
const db = require('./config/db');
const registerUser = require('./services/users/users.controller');
const { login } = require('./services/admin/admin.controller');
const addInvoice = require('./services/invoices/invoice.controller');

const app = express();
db();

app.use(express.static(path.join(__dirname, 'public')));

app.listen(3002, () => {
  console.log('Example app listening on port 3002!');
});

app.use(cors());
app.use(express.json());

registerUser(app);
login(app);
addInvoice(app);