//Express server
const express = require('express');
const app = express();
app.use(express.json())

//Dialogflow fulfillment module
const { WebhookClient } = require('dialogflow-fulfillment');


//connection to mongoDB
var MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/Microproject-2/";
//db = MongoClient.connect(url)

//importing the intent response
const Welcome = require('./Response/Welcome.js');
const Complaint = require('./Response/complaint.js');
const issue_number = require('./Response/issue_number');
const Register_user = require('./Response/Register_user');
const end_convo = require('./Response/end_convo');
//maping the intents
let intentMap = new Map();
   intentMap.set('Welcome',Welcome);
   intentMap.set('Complaint',Complaint);
   intentMap.set('Issue_number',issue_number);
   intentMap.set('Register_user',Register_user);
   intentMap.set('end_convo',end_convo);
//handling dialogflow queries
app.post('/end',async(req,res)=>{
    //console.log('inside app.post');
    const bot = new WebhookClient({request:req, response:res});
    try{
        bot.handleRequest(intentMap);
    } catch(err){
        console.log('error',err);
        bot.handleRequest(intentMap);
    }
})

//listening to queries
const port = 3012;
app.listen(port, ()=>{
    console.log('Trouble-bot listening on port :',port);
    
})