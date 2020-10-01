const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HospitalSchema = new Schema({
    hId:{
        type:String,
        required:[true,'hId field is required']
    },
    name:{
        type:String,
        required:[true,'name field is required']
    },
    contactNo:{
        type:String,
        required:[true,'contactno field is required']
    },
    address:{
        type:String,
        required:[true,'address field is required']
    },
});
const Hospital = mongoose.model('Hospitals',HospitalSchema);

module.exports = Hospital