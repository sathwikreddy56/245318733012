const gentoken = require("../utils/Randidgen.js")
const url = "mongodb://localhost:27017/Microproject-2/";
async function Issue_number(agent){
    var MongoClient = require('mongodb').MongoClient;
    console.log(agent.intent+" intent triggered");
    const db = new MongoClient(url,{ useUnifiedTopology: true });
    await db.connect();
    const issue_num = agent.parameters.IssueNum;
    let name = await db.db("Microproject-2").collection("Users").find({phonenumber:agent.parameters.PhoneNumber}).toArray();
    var id;
    let pd = Date.now();
    let date_ob = new Date(pd);
    let time_date = date_ob.getFullYear()+"-"+date_ob.getMonth()+"-"+date_ob.getDate()
    if(issue_num==1){
        id = gentoken("InDo");
        var myobj1 = { Issue: "Internet Down", UserName: name[0].UserName ,PhoneNumber:agent.parameters.PhoneNumber,id:id,Time_Date : time_date};
        await db.db("Microproject-2").collection("Issues").insertOne(myobj1);
    }
    if(issue_num==2){
        id = gentoken("SlIn");
        var myobj2 = { Issue: "Slow Internet",  UserName: name[0].UserName ,PhoneNumber:agent.parameters.PhoneNumber ,id:id,Time_Date : time_date};
        await db.db("Microproject-2").collection("Issues").insertOne(myobj2);
    }
    if(issue_num==3){
        id = gentoken("BuPr");
        var myobj3 = { Issue: "Buffering problem",  UserName: name[0].UserName ,PhoneNumber:agent.parameters.PhoneNumber,id:id ,Time_Date : time_date};
        await db.db("Microproject-2").collection("Issues").insertOne(myobj3);
    }
    if(issue_num==4){ 
        id = gentoken("NoCo");
        var myobj4 = { Issue: "No connectivity",  UserName: name[0].UserName ,PhoneNumber:agent.parameters.PhoneNumber ,id:id,Time_Date : time_date};
        await db.db("Microproject-2").collection("Issues").insertOne(myobj4);
    }
    var out = "sorry "+name[0].UserName+" for the inconvinence faced, We will look into the issue right away! \n This is your Complaint Number \n"+id;
    await agent.add(out);
}
module.exports = Issue_number