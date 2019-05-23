const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const mongoose = require('./util/database'); 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use(function(req, res, next) {
    // res.header('Access-Control-Allow-Origin', 'http://localhost:4200'); // allow origin
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
    res.header('Access-Control-Expose-Headers', 'Content-Length');
    res.header('Access-Control-Allow-Headers', 'Accept, Authorization, Content-Type, X-Requested-With, Range');
    if (req.method === 'OPTIONS') {
      return res.send(200);
    } else {
      return next();
    }
  });
  
  app.use('/api/', authRoutes);

  app.use(function (req, res, next) {
    var err = new Error('Page Not Found');
    err.status = 404;
    next(err);
  });
  
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.send(err.message);
  });
  
  app.listen(port, function () {
      console.log('Webshop is listening on ', port);
    });
