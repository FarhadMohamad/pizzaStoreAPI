const User = require('../models/user');
const jwt = require('jsonwebtoken');

exports.login = (req, res, next) => {
  
    (req.body.email && req.body.password) 
      User.authenticate(req.body.email, req.body.password, function (error, user) {
      console.log(req.body);
      console.log
        if (error || !user) {
          var err = new Error('Wrong email or password.');
          err.status = 401;
          // return next(err);
          return res.json({ status: false, err: err });
        } else {
  
          const token = jwt.sign(
            {
              email: user.email,
              userId: user._id.toString(),
            },
            'pizzaStore1339',
            { expiresIn: '5h' }
          );
          res.status(200).json({status: true ,token: token, userId: user._id.toString(), usrEmail: user.email.toString()});
        }
      });
   
  }


  exports.register = (req, res, next) => {
    if (req.body.email &&
      req.body.name &&
      req.body.password ) {
  
      var userData = {
        email: req.body.email,
        name: req.body.name,
        password: req.body.password
      }
  
  
      User.create(userData, function (error, user) {
        if (error) {
          console.log(error);
          return next(error);
        } else {
          return res.json({ status: true });
        }
      });
  
    }  
  }




