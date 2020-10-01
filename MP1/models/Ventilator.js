const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VentilatorSchema = new Schema({
    hId:{
        type:String,
        required:[true,'hId field is required']
    },
    ventilatorId:{
        type:String,
        required:[true,'VentId field is required']
    },
    name:{
        type:String,
        required:[true,'Name field is required']
    },
    status:{
        type:String,
        required:[true,'Status field is required']
    },
    
});
const Ventilator = mongoose.model('Ventilator',VentilatorSchema);

module.exports = Ventilator