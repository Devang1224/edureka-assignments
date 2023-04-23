const mongoose = require('mongoose')

const schema = mongoose.Schema;

const location = new schema({
    id:{
        type: Number,
    },
    name:{
        type: String,
        required: true
    },
    city_id:{
        type: Number,
    },
    location_id:{
        type: Number
    },
    country_name:{
        type: String,
        required: true
    }
})

module.exports=mongoose.model('Locations',location,'location');