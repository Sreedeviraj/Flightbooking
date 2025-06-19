
import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { addflightApi } from '../services/Allapi';

export default function FlightFormModal({ onFlightAdded }) {
  const [show, setShow]     = useState(false);
  const [formData, setFormData] = useState({
  flightName: '', flightNumber: '', departureCity: '', arrivalCity: '',
  departureDate: '', arrivalDate: '', departureTime: '', arrivalTime: '',
  price: '', duration: '' 
});


  const handleChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    const res = await addflightApi({ ...formData, duration: Number(formData.duration) });

    if (res.status === 201) {
      alert('Flight added successfully');
      setFormData({
        flightName: '', flightNumber: '', departureCity: '', arrivalCity: '',
        departureDate: '', arrivalDate: '', departureTime: '', arrivalTime: '', price: '',duration: ''
      });
      setShow(false);
      if (onFlightAdded) await onFlightAdded();
    } else {
      alert('Failed to add flight');
    }
  };

  return (
    <>
      <Button
        variant="success"
        style={{ position: 'fixed', bottom: 30, right: 30, zIndex: 999 }}
        onClick={() => setShow(true)}
      >
        + Add Flight
      </Button>

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton><Modal.Title >Add Flight</Modal.Title></Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            {[
              { name:'flightName', placeholder:'Flight Name', type:'text' },
              { name:'flightNumber', placeholder:'Flight Number', type:'text' },
              { name:'departureCity', placeholder:'Departure City', type:'text' },
              { name:'arrivalCity', placeholder:'Arrival City', type:'text' },
              { name:'departureDate', placeholder:'Departure Date', type:'date' },
              { name:'arrivalDate', placeholder:'Arrival Date', type:'date' },
              { name:'departureTime', placeholder:'Departure Time', type:'time' },
              { name:'arrivalTime', placeholder:'Arrival Time', type:'time' },
              { name:'price', placeholder:'Price', type:'number' },
            { name:'duration', placeholder:'Duration (in hours)', type:'number' }
 
            
            ].map(field => (
              <Form.Group key={field.name} className="mb-2">
                <Form.Control
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  value={formData[field.name]}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            ))}
            <Button type="submit" className="w-100 mt-2 custom-hover-btn"
                        style={{
                            backgroundColor: '#074799',
                            color: 'white',
                            border: 'none'
                        }} >Submit</Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}