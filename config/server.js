const app = require('express')(),
      bodyParser = require('body-parser'),
      consign = require('consign'),
      cors = require('cors'),
      db = require('./database');

app.db = db;

app.use(bodyParser.urlencoded({extended:true}))
   .use(bodyParser.json())
   .use(cors());

consign()
    .include('./api/config/database.js')
    .then()
    .into(app)

module.exports = app;