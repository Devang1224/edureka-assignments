const express = require('express')
const mongoose = require('mongoose')
const body = require('body-parser')

//controllers
const city = require('../controllers/location')
const locationController = require('../controllers/zomatolocation')

const router = express.Router();



router.get('/',locationController.getAllLocations)

module.exports = router;
