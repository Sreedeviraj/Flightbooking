const express=require('express')
const router=new express.Router()
const flightcontrollers=require('../controllers/flightcontrollerr')
//route path to add flight
router.post('/add/flight',flightcontrollers.addflight)
//route to get flight
router.get('/get/flight',flightcontrollers.getflight)



module.exports=router
