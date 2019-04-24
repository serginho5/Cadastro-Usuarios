const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const routes = require('./routes.js');
routes(app);

app.listen(3000, () => console.log('Server rodando na porta 3000'));