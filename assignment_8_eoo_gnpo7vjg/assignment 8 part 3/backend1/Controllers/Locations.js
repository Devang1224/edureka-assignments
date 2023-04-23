const Locations=require('../models/Locations');

exports.getAllLocations=(req,res)=>{

    Locations.find().then((success)=>{
        
        res.status(200).json({
            message:"successfully fetched",
            Locations:success
        })
    }).catch((err)=>{

        res.status(500).json({
            message:"someting went wrong",
            Error:err
        })
    })
}

