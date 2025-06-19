const express=require('express')
const router=new express.Router()
const flightcontrollers=require('../controllers/flightcontrollerr')
//route path to add flight
router.post('/add/flight',flightcontrollers.addflight)


module.exports=router
