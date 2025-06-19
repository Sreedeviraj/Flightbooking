const flights = require('../model/flightschema')

//controller function to add new flight
exports.addflight= async (req, res) => {
    console.log("inside addflight function")
    try {
        const {flightName,flightNumber,departureCity,arrivalCity,departureDate,arrivalDate,departureTime,arrivalTime,price,duration} = req.body;
        const newflight = new flights({ flightName,flightNumber,departureCity,arrivalCity,departureDate,arrivalDate,departureTime,arrivalTime,price,duration});
        await newflight.save();
        res.status(201).json(newflight );
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to add task" });
    }
}
