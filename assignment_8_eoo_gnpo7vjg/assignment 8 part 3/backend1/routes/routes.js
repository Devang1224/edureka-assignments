const express=require('express');
const router=express.Router();

const RestaurantController=require('../Controllers/Restaurants');
const LocationController=require("../Controllers/Locations");
const MealTypeController=require('../Controllers/MealTypes');
const UserController=require('../Controllers/Users');


router.get('/getAllRestaurants',RestaurantController.getAllRestaurants);
router.get('/getRestaurantByName/:name',RestaurantController.getRestaurantByName)
router.get('/getRestaurantByCity/:city',RestaurantController.getRestaurantByCity);
router.get('/getRestaurantById/:id',RestaurantController.getRestaurantById)
router.post('/FilterRestaurants',RestaurantController.FilterRestaurants);
router.get('/getAllLocations',LocationController.getAllLocations);
router.get('/getAllMealTypes',MealTypeController.getAllMealTypes);
router.post('/UserSignUp',UserController.UserSignUp);
router.post('/UserLogin',UserController.UserLogIn)

module.exports=router;