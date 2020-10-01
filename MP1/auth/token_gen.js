let jwt = require('jsonwebtoken');
let config = require('./config');
class HandlerGenerator {
  login (req, res) {
    let username = req.body.username;
    let password = req.body.password;
    let mockedUsername = config.userid;
    let mockedPassword = config.pwd;
    if (username && password) {
      if (username === mockedUsername && password === mockedPassword) {
        let token = jwt.sign({username: username},
          config.secret,{ expiresIn: '24h'}
        );
        res.json({
          success: true,
          message: 'Authentication successful!',
          token: token
        });
      } else {
        res.status(403).send({
          success: false,
          message: 'Incorrect username or password'
        });
      }
    } else {
      res.status(400).send({
        success: false,
        message: 'Authentication failed! Please check the request'
      });
    }
  }
}

module.exports = HandlerGenerator;
