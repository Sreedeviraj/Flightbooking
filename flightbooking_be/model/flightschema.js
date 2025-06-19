const mongoose=require('mongoose')
const flightschema=new mongoose.Schema({
    flightName:{
        type:String,
        required:true
    },
    flightNumber:{
        type:String,
        required:true
    },
      departureCity:{
        type:String,
        required:true
    },
      arrivalCity:{
        type:String,
        required:true
    },
      departureDate:{
        type:String,
        required:true
    },
      arrivalDate:{
        type:String,
        required:true
    }
    ,
      departureTime:{
        type:String,
        required:true
    }
    ,
      arrivalTime:{
        type:String,
        required:true
    }
     ,
      price:{
        type:String,
        required:true
    } ,
    duration: { type: Number, required: true }
    


})

const users=mongoose.model('flights',flightschema)
module.exports = users