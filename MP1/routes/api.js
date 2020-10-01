const express = require('express');
const router = express.Router();
const Ventilator = require('../models/Ventilator')
const Hospital = require('../models/hospitals')
//list of hospitals
router.get('/HospitalList',(req,res,next)=>{
    Hospital.find().then((hospital)=>{
        res.send({type:'GET',query:"Hospital List",msg:hospital});
    }).catch(next);
    
});

//list of Ventilators
router.get('/VentilatorList',(req,res,next)=>{
    Ventilator.find().then((ventilator)=>{
        res.send({type:'GET',query:"Ventilator List",msg:ventilator});
    }).catch(next);
});

//search Ventilators by status and hospital name
router.get('/Ventilator/:status/:name',(req,res,next)=>{
    Ventilator.find({status:req.params.status,name:req.params.name}).then((ventilator)=>{
        res.send({type:'GET',query:"Ventilator by status and hospital name",msg:ventilator});
    }).catch(next);
   
});

//search hospitals by name
router.get('/Hospital/:name',(req,res,next)=>{
    Hospital.find({name:req.params.name}).then((hospital)=>{
        res.send({type:'GET',query:"Hospital by name",msg:hospital});
    }).catch(next);
});

//update Ventilators by id
router.put('/Ventilator/:ventid',(req,res,next)=>{
    Ventilator.findOneAndUpdate({ventilatorId:req.params.ventid},req.body).then((vent)=>{
        res.send({type:'PUT',query:"updated vent by id",msg:vent});
    }).catch(next);
    
});

//adding new Hospital
router.post('/Hospital',(req,res,next)=>{
    Hospital.create(req.body).then((vent)=>{
        res.send({type:'POST',query:"Adding Hospital",msg:vent});
    }).catch(next);
});

//adding new ventilators
router.post('/Ventilator',(req,res,next)=>{
    Ventilator.create(req.body).then((vent)=>{
        res.send({type:'POST',query:"Adding Ventilator",msg:vent});
    }).catch(next);
});

//delete Ventilators by id
router.delete('/Ventilator/:ventid',(req,res,next)=>{
    Ventilator.findOneAndRemove({ventilatorId:req.params.ventid}).then((vent)=>{
        res.send({type:'DELETE',query:"delete vent by id",vent:vent});
    }).catch(next);
});
module.exports = router