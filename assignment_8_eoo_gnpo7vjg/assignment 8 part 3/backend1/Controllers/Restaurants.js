const Restaurants=require('../models/Restaurants');

exports.getAllRestaurants=(req,res)=>{

    Restaurants.find().then((success)=>{
        
        res.status(200).json({
            
            message:"restaurants has been fetched successfully",
            RestaurantData:success
        })
    }).catch((err)=>{

        res.status(500).json({
            message:"error while fetching data",
            Error:err
        })
    })

}
//gettin all restaurants by th id of restaurant

exports.getRestaurantById=(req,res)=>{

     const rest_id=req.params.id;

     Restaurants.find({_id:rest_id}).then((success)=>{

        res.status(200).json({
            message:"data fetched succesfully",
            RestaurantData:success
        })
     }).catch((err)=>[
         
        res.status(500).json({
            message:"error occured whild fetching data",
            Error:err
        })
     ])
}


//getging all restaurants by the name fo the restaurant
exports.getRestaurantByName=(req,res)=>{

    const rest_name=req.params.name;

    Restaurants.find({name:rest_name}).then((success)=>{

        res.status(200).json({
            message:"data fetched succefully",
            RestaurantData:success
        })
    }).catch((err)=>{

        res.status(500).json({

            message:"data fetching failed",
            Error:err
        })
    })
}

//getting all restaurants by the city of the restaurant
exports.getRestaurantByCity=(req,res)=>{

    const rest_city=req.params.city;

    Restaurants.find({city:rest_city}).then((success)=>{

        res.status(200).json({

            message:"fetched successfully",
            RestaurantData:success
        })
    }).catch((err)=>{

        res.status(500).json({
            
            message:"data fetching failed",
            Error:err
        })
    })
}

/// applying filter options on Restaurant based on location-id, mealtype-id, cuisine, hcost, lcost, sort and paginationa and limit

exports.FilterRestaurants=(req,res)=>{

    const {
        mealtype,
        location,
        cuisine,
        hcost,
        lcost,
        sort=1,
        page=1
    }=req.body;
    let filters={};

   if(mealtype){
       
      filters.mealtype_id=mealtype
   }
   if(location){
       filters.location_id=location
   }
   if(cuisine){
       
        filters["cuisine.name"]={
            $in:cuisine
        }

    }
   if(hcost)
   {
       filters.min_price={
           $lt:hcost
       }
   }
   if(lcost){
       
      filters.min_price={
          $gt:lcost
      }
   }
   if(lcost && hcost){

     filters.min_price={
         $lt:hcost,
         $gt:lcost
     }
   }

    Restaurants.find(filters).sort({min_price:sort}).then((success)=>{

        //paginationc
        console.log(success[0].cuisine)
        const pageSize=2
        var result=success.slice(page*pageSize-pageSize,page*pageSize);
        
        
        res.status(200).json({
            message:req.body,
            Restaurants:result,
            pageNo:page,
            noOfPages:Math.ceil((success.length/pageSize))
        })
    }).catch((err)=>{

        res.status(500).json({
            message:"error occured",
            Error:err
        })
    })
}





    

