const express=require('express')   
const app=express()   
const bodyParser=require('body-parser')   
const MongoClient=require('mongodb').MongoClient   
var db; 
var s;

MongoClient.connect('mongodb://localhost:27017/Inventory', (err,database) =>{        
	if(err) return console.log(err)
	db=database.db('Inventory')     
	app.listen(5000,() =>{
		console.log('Listening at port number 5000')
	})
})
app.set('view engine','ejs')
app.use(bodyParser.urlencoded({extended:true})) 
app.use(bodyParser.json())   
app.use(express.static('public'))  

//homepage
app.get('/', (req,res)=>{                
	db.collection('shoes').find().toArray( (err,result)=>{     
		if(err) return console.log(err)     
	res.render('homepage.ejs', {data:result})      
	})
})
//for add
app.get('/create', (req,res)=>{     //change
	res.render('add.ejs')            //change
})

//for update
app.get('/updatestock', (req,res)=>{			//change
	res.render('update.ejs')				//change
})

//for delete
app.get('/deleteproduct', (req,res)=>{		//change
	res.render('delete.ejs')		//change
})

app.get('/searchres', (req,res)=>{		//change
	res.render('search.ejs')		//change
})

//post request code-
app.post('/AddData', (req,res)=>{			
	db.collection('shoes').save(req.body, (err,result)=>{			
		if(err) return console.log(err)
	res.redirect('/')                        
	})
})

//post-update stock 
app.post('/update', (req,res)=>{			
		db.collection('shoes').find().toArray((err,result)=>{	   			
			if(err) 
				return console.log(err)
			for(var i=0;i<result.length;i++){
				if(result[i].pid==req.body.id){
					s=result[i].stock
					break
				}
			}
			db.collection('shoes').findOneAndUpdate({pid:req.body.id},{
				$set:{stock: parseInt(s) +parseInt(req.body.stock)}} , {sort:{_id:-1}},
				(err,result) =>{
					if(err)
						return console.log(err)
					console.log(req.body.id+'stock updated')
					res.redirect('/')
				})
			})	
		})

//post- delete stock
app.post('/delete',(req,res)=>{
	db.collection('shoes').findOneAndDelete({pid:req.body.id}, (err,result)=>{    
		if(err)
			return console.log(err)
		res.redirect('/')
	})
})

//search stock
app.post('/searchres',(req,res)=>{
	console.log(req.body)
	console.log(req.body.id)
	db.collection('shoes').findOne({pid:req.body.id}).then((result)=>{
		console.log(result)
		res.render('searchres.ejs', {data: [result]})  
	})
})
app.post('/searchdelete',(req,res)=>{
	console.log(req.body)
	console.log(req.body.id)
	db.collection('shoes').findOneAndDelete({pid:req.body.id}, (err,result)=>{    
		if(err)
			return console.log(err)
	})
	db.collection('shoes').findOne({pid:req.body.id}).then((result)=>{
		console.log(result)
		if(result)
			res.render('searchres.ejs', {data: [result]})  
		else
			res.redirect('/')
	})
})