const locationData = require('../models/location')
const mealType = require('../models/mealtype')
const restaurantdata = require('../models/restaurantdata')


exports.location=(req,res)=>{


//costing

let filter={

}

//add city clause
if(req.body.city_id)
{
    filter.city=req.body.city_id;
}



if(req.body.lcost && req.body.hcost)      
{
    filter.cost ={
        $lt: req.body.hcost,
        $gt: req.body.lcost
    }
}

//cuisines
if(req.body.cuisine && req.body.cuisine.length>0)
{
    //Using square [] bracket: In JavaScript, we can use [] brackets to add elements to an object. This is another way to add an element to the JavaScript object.
    
    filter['Cuisine.name']={$in:req.body.cuisine}  // here Cuisine is an array and it has an objectkey called name
    // $in:   Matches any of the values specified in an array.

} 

//pagination+sorting


     restaurantdata.find(filter).limit(2).skip(2*(req.params.pageNo)).sort({cost:req.body.sort})
     .then((result)=>{

        restaurantdata.find(filter).count((err,count)=>{
            if(err)console.log(err);
            else{
                res.status(200).json(
                    { message: "City Fetched Successfully", 
                      city: result,
                      totalRestaurants: count
                    })

            }
        })

    })
}
   






exports.restaurantDetails=(req,res)=>{

    restaurantdata.findOne({name:req.params.name}).then((result)=>{
        res.status(200).json({
            message:"Restaurant Fetched Succesfully",
            data:result
        })
    })
}

exports.getRestaurantsByCity=(req,res)=>{



    restaurantdata.find({city:req.params.id}).then(
        result=>res.status(200).json({
            message:"restaurants fetched successfully",
            data: result
        })
        ).catch(
            error=>res.status(500).json({
                message:"DB error occured",
                error: error
            })
        )
}


