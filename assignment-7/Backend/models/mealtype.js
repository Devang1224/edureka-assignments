const mongoose = require('mongoose')

const schema = mongoose.Schema;

const mealtype = new schema({
    id:{
        type: Number,
    },
    name:{
        type: String,
        required: true
    },
    content:{
        type: String
    },
    image:{
        type: String
    }
})

module.exports= mongoose.model('Mealtype',mealtype,'mealtype');