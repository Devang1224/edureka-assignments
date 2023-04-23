const express=require('express');
const app=express();
const port=8900;
const cors=require('cors');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const routes=require('./routes/routes')

//intlizing all the libraries
app.use(bodyParser.json());
app.use(cors());
app.use('/',routes);







//connecting to mongodb

mongoose.connect(
    'mongodb+srv://Praveen:Praveen123@cluster0.2bfat.mongodb.net/Zomato?retryWrites=true&w=majority',
    {
        useNewUrlParser:true,
        useUnifiedTopology:true
    }
    
).then((success)=>{

    console.log("mongodb connected");

    app.listen(port,()=>{
        console.log(`server is running on ${port}`);
    })
}).catch((err)=>{
    
    console.log(`Error occured while Connecting ${err}`)
})





