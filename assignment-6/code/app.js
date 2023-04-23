const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

const routes = require('../code/routes/restaurants') 
const locationRoutes = require('./routes/location')
const mealTypeRoutes = require('./routes/mealtype')
const app = express()
const URL = "mongodb://localhost:27017/zomato_60";

app.use(bodyParser.json()); 
app.use(cors())

app.use('/',routes)
app.use('/location',locationRoutes)
app.use('/mealtype',mealTypeRoutes)





mongoose.connect(URL,{ useNewUrlParser: true}
).then(client => {
    // starting the server using the listen function
    app.listen(9098, () => {
        console.log(`Server running at 9098`)
    });
}).catch(err => {
    console.log(err);
})





// /users/devangmehra/mongodb/bin/mongod --dbpath=/users/devangmehra/mongodb-data