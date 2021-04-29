var express=require('express')
var bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://127.0.0.1:27017';
const dbName = 'inventorymanagement';
var app=express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var db;

MongoClient.connect(url,{useUnifiedTopology:true},(err,client)=>{
    if (err)console.log(err);
    db=client.db(dbName);
    console.log('connected to database');
})
app.get('/addproduct',(req,res)=>{
        res.sendFile(__dirname+'/'+'addproduct.html');
})
app.post('/addproduct',(req,res)=>{
    var productid=req.body.productid;
    var brand=req.body.brand;
    var category=req.body.category;
    var productname=req.body.productname;
    var size=req.body.size;
    var quantity=req.body.quantity;
    var cp=req.body.costprice;
    var sp=req.body.sellingprice;
    console.log(productid);
    db.collection('stock').insertOne({'productid':productid,'brand':brand,'category':category,'productname':productname,
    'size':size,'quantity':quantity,'cp':cp,'sp':sp});
    res.redirect('/');
})
app.post('/deleteproduct',(req,res)=>{
    var productid=req.body.productid;
    db.collection('stock').deleteOne({'productid':productid});
    res.redirect('/');
})
app.get('/deleteproduct',(req,res)=>{
    var productid=req.query.productid;
    res.render(__dirname+'/'+'deleteproduct.ejs',{productid:productid});
})
app.get('/allproductids',(req,res)=>{
    db.collection('stock').find().toArray((err,result)=>{
        res.json(result);
    })
})
app.get('/update/:productid',(req,res)=>{
    var productid=req.params.productid;
    db.collection('stock').find({'productid':productid}).toArray((err,result)=>{
        res.render(__dirname+'/'+'update.ejs',{data:result[0]})
    })
})
app.post('/update/:productid',(req,res)=>{
    var productid=req.body.productid;
    var brand=req.body.brand;
    var category=req.body.category;
    var productname=req.body.productname;
    var size=req.body.size;
    var quantity=req.body.quantity;
    var cp=req.body.costprice;
    var sp=req.body.sellingprice;
    console.log(productid);
    db.collection('stock').deleteMany({'productid':productid});
    db.collection('stock').insertOne({'productid':productid,'brand':brand,'category':category,'productname':productname,
    'size':size,'quantity':quantity,'cp':cp,'sp':sp});
    res.redirect('/');
})
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/'+'home.html')
})
app.get('/fulldata',(req,res)=>{
    db.collection('stock').find().toArray((err,result)=>{
        res.json(result);
    })
})
app.get('/sales',(req,res)=>{
    res.sendFile(__dirname+'/'+'sales.html');
})
app.post('/sales',(req,res)=>{
    var date=req.body.date;
    var id=req.body.productid;
    var unit=req.body.unit;
    var quantity=req.body.quantity;
    var rupees=req.body.rupees;
    db.collection('sales').insertOne({'date':date,'productid':id,'unit':unit,'quantity':quantity,'rupees':rupees});
    res.redirect('/sales');
})
app.get('/salesform',(req,res)=>{
    res.sendFile(__dirname+'/'+'salesform.html');
})
app.get('/allsales',(req,res)=>{
    db.collection('sales').find().toArray((err,result)=>{
        res.json(result);
    })
})
app.set('views',__dirname);
app.set('view engine','ejs');
app.listen(3000);