
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { addflightApi } from '../services/Allapi';
import { ToastContainer, toast } from 'react-toastify';


function FlightForm() {
    //Manage form input values using useState hook
    const [flightData, setFlightData] = useState({
        flightName: '',
        flightNumber: '',
        departureCity: '',
        arrivalCity: '',
        departureDate: '',
        arrivalDate: '',
        departureTime: '',
        arrivalTime: '',
        price: '',
        duration: ''
    });
    const navigate = useNavigate(); //Used for future navigation

    //Handle form submission
    const handleAddFlight = async e => {
        e.preventDefault();
        const {
            flightName,
            flightNumber,
            departureCity,
            arrivalCity,
            departureDate,
            arrivalDate,
            departureTime,
            arrivalTime,
            price,
            duration
        } = flightData;

        
        if (
            !flightName ||
            !flightNumber ||
            !departureCity ||
            !arrivalCity ||
            !departureDate ||
            !arrivalDate ||
            !departureTime ||
            !arrivalTime ||
            !price ||
            !duration
        ) {
            alert("please fill the form completely")
            return;
        }


        const res = await addflightApi({
            ...flightData,
            price: Number(flightData.price),
            duration: Number(flightData.duration)
        });

        if (res.status === 201) {
            
            alert('Flight added successfully');

            
            setFlightData({
                flightName: '',
                flightNumber: '',
                departureCity: '',
                arrivalCity: '',
                departureDate: '',
                arrivalDate: '',
                departureTime: '',
                arrivalTime: '',
                price: '',
                duration: ''
            });

            
            if (onFlightAdded) await onFlightAdded();
        } else {
            alert('Failed to add flight');
        }
    };


    const handleClear = () => {
        setFlightData({
            flightName: '',
            flightNumber: '',
            departureCity: '',
            arrivalCity: '',
            departureDate: '',
            arrivalDate: '',
            departureTime: '',
            arrivalTime: '',
            price: '',
            duration: ''
        });
    };

    return (
        <div className="container mt-5 w-50 text-center">
            <h2>Add Flight Details</h2>
            <Form onSubmit={handleAddFlight}>
                <Form.Group className="mb-3">
                    <Form.Control
                        type="text"
                        placeholder="Flight Name"
                        name="flightName"
                        value={flightData.flightName}
                        onChange={e => setFlightData({ ...flightData, flightName: e.target.value })}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Control
                        type="text"
                        placeholder="Flight Number"
                        name="flightNumber"
                        value={flightData.flightNumber}
                        onChange={e => setFlightData({ ...flightData, flightNumber: e.target.value })}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Control
                        type="text"
                        placeholder="Departure City"
                        name="departureCity"
                        value={flightData.departureCity}
                        onChange={e => setFlightData({ ...flightData, departureCity: e.target.value })}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Control
                        type="text"
                        placeholder="Arrival City"
                        name="arrivalCity"
                        value={flightData.arrivalCity}
                        onChange={e => setFlightData({ ...flightData, arrivalCity: e.target.value })}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Control
                        type="date"
                        placeholder="Departure Date"
                        name="departureDate"
                        value={flightData.departureDate}
                        onChange={e => setFlightData({ ...flightData, departureDate: e.target.value })}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Control
                        type="date"
                        placeholder="Arrival Date"
                        name="arrivalDate"
                        value={flightData.arrivalDate}
                        onChange={e => setFlightData({ ...flightData, arrivalDate: e.target.value })}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Control
                        type="time"
                        placeholder="Departure Time"
                        name="departureTime"
                        value={flightData.departureTime}
                        onChange={e => setFlightData({ ...flightData, departureTime: e.target.value })}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Control
                        type="time"
                        placeholder="Arrival Time"
                        name="arrivalTime"
                        value={flightData.arrivalTime}
                        onChange={e => setFlightData({ ...flightData, arrivalTime: e.target.value })}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Control
                        type="number"
                        placeholder="Price"
                        name="price"
                        value={flightData.price}
                        onChange={e => setFlightData({ ...flightData, price: e.target.value })}
                    />
                </Form.Group>
                <Form.Group className="mb-2">
                    <Form.Control
                        type="number"
                        name="duration"
                        placeholder="Duration (in hours)"
                        value={formData.duration}
                        onChange={e => setFlightData({ ...flightData, duration: e.target.value })}
                        required
                    />
                </Form.Group>


                <div className="d-flex justify-content-center gap-3">
                    <Button variant="primary" type="submit"
                    className="custom-hover-btn"
                        style={{
                            backgroundColor: '#074799',
                            color: 'white',
                            border: 'none'
                        }}
                    >
                        Submit
                    </Button>
                    <Button variant="warning" type="button" onClick={handleClear}>
                        Clear
                    </Button>
                </div>
            </Form>
            <ToastContainer autoClose={1000} />
        </div>
    );
}

export default FlightForm;