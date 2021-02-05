const url = "mongodb://localhost:27017/Microproject-2/";
async function Register_user(agent){
    var MongoClient = require('mongodb').MongoClient;
    console.log(agent.intent+" intent triggered");
    const db = new MongoClient(url,{ useUnifiedTopology: true });
    await db.connect();
    var myobj1 = { UserName:agent.parameters.username ,phonenumber:agent.parameters.phonenumber};
    await db.db("Microproject-2").collection("Users").insertOne(myobj1);
    var out = "User Registered Welcome to our network !";
    await agent.add(out);
}
module.exports = Register_user