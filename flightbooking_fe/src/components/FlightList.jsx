import React from 'react';
import { Card, Button } from 'react-bootstrap';

function FlightList({ flights }) {
    
  if (!flights.length) {
    return <p className="text-center">No flights to display.</p>;
  }

  return flights.map(flight => (
    <Card key={flight._id || flight.id} className="mb-3 shadow-sm p-3">
      <div className="d-flex justify-content-between align-items-center">
        
        <div className="text-center" style={{ width: '20%' }}>
          <h5 className="fw-bold mb-0">{flight.flightName}</h5>
          <small>{flight.flightNumber}</small>
        </div>

        
        <div style={{ width: '55%' }}>
          <div className="d-flex justify-content-between mb-1">
            <span><strong>{flight.departureCity}</strong></span>
            <span className="text-muted">→</span>
            <span><strong>{flight.arrivalCity}</strong></span>
          </div>
          <div className="d-flex justify-content-between text-muted" style={{ fontSize: '0.9rem' }}>
            <span>{flight.departureDate} @ {flight.departureTime}</span>
            <span>{flight.arrivalDate} @ {flight.arrivalTime}</span>
            <p className="mb-1">Duration: {flight.duration} hrs</p>

          </div>
        </div>

    
        <div className="text-end" style={{ width: '20%' }}>
          <h5 className="fw-bold mb-2" style={{color:'#074799'}}>₹{flight.price}</h5>
          <Button variant="outline-success" size="sm">Select</Button>
        </div>
      </div>
    </Card>
  ));
}

export default FlightList; 