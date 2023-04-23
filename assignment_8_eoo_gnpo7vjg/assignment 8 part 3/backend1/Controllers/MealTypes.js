const MealTypes=require('../models/MealTypes');

exports.getAllMealTypes=(req,res)=>{

    MealTypes.find().then((success)=>{

        res.status(200).json({
            message:"data fetched successfully",
            MealTypes:success
        })
    }).catch((err)=>{

        res.status(200).json({
            
            message:"error occurred while fetching",
            Error:err
        })
    })
}