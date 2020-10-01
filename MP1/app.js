const express = require('express');
const app = express();
let jwt = require('jsonwebtoken');
const bodyParser = require('body-parser')
const route = require('./routes/api');
let middleware = require('./auth/middleware');
let handle = require('./auth/token_gen')
const url='mongodb://127.0.0.1:27017/HospitalManagement(MP1)';
const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
mongoose.connect(url,{ useUnifiedTopology: true ,useNewUrlParser: true})
mongoose.Promise = global.Promise;
app.use(bodyParser.json())
let handlers = new handle();
app.post('/login', handlers.login);
app.use('/api',middleware.checkToken,route);
app.use((err,req,res,next)=>{
    console.log("error",err);
    res.status(422).send({error:err.message});
})
app.listen(3000,()=>{
    console.log("listening to port 3000")
    console.log(`Connected Database: ${url}`);
});