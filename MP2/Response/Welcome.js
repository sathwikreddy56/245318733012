
const url = "mongodb://localhost:27017/Microproject-2/";
async function Welcome(agent){
    var MongoClient = require('mongodb').MongoClient;
    console.log(agent.intent+" intent triggered");
    const db = new MongoClient(url,{ useUnifiedTopology: true });
    await db.connect();
    let name = await db.db("Microproject-2").collection("Users").find({phonenumber:agent.parameters.Phonenumber}).toArray();
    if(name.length==0){
        let out = "Sorry we could not find any registered user with this phone number would you like to register?";
        await agent.add(out);
    }else{
        let Res = await db.db("Microproject-2").collection("Responses").find({intent:agent.intent}).toArray();
        let out = "hello " + name[0].UserName+" "+Res[0].Response;
        await agent.add(out);
    }
}
module.exports = Welcome