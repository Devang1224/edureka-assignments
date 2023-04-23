const express = require('express')
const mongoose = require('mongoose')
const body = require('body-parser')


//controllers
const city = require('../controllers/location')
const mealtypeRoutes = require('../controllers/mealtype')
const router = express.Router();




router.get('/',mealtypeRoutes.getAllMealtypes)


module.exports = router;
