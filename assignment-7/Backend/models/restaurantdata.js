const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Registering the Restaurant Schema
const restaurantSchema = new Schema({

   id:{
    type: String
   },
    name: {
        type: String,
        required: true
    },
    city_name: {
        type: String,
        required: true
    },
     city_id: {
        type: Number,
        required: true
    },
    locality: {
        type: String,
        required: true
    }, 
     thumb: {
        type: Array,
        required: true
    },
    cost: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
   type: {
        type: Array,
        required: true
    }, cuisine: {
        type: Array,
        required: true
    }
    
    
   
})


module.exports = mongoose.model('restaurantData',restaurantSchema,'restaurants')