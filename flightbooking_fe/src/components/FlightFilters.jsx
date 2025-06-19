import React, { useState } from 'react';
import { Card, Form, Row, Col, Button } from 'react-bootstrap';
import '../App.css';


function FlightFilters({ flights, onFilterChange, onSortChange }) {
    //Get unique flight names for airline filter
    const airlines = Array.from(new Set(flights.map(f => f.flightName)));

    //State variables for filters and sorting
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [minDuration, setMinDuration] = useState('');
    const [maxDuration, setMaxDuration] = useState('');
    const [selectedAirlines, setSelectedAirlines] = useState([]);
    const [sortOption, setSortOption] = useState('');


    //Triggered when Apply button is clicked
    const handleApply = () => {
        onFilterChange({
            price: { min: minPrice, max: maxPrice },
            duration: { min: minDuration, max: maxDuration },
            airlines: selectedAirlines
        });
        onSortChange(sortOption);
    };


    //Reset all filters and sorting optiom
    const handleClear = () => {
        setMinPrice('');
        setMaxPrice('');
        setMinDuration('');
        setMaxDuration('');
        setSelectedAirlines([]);
        setSortOption('');
        onFilterChange({ price: {}, duration: {}, airlines: [] });
        onSortChange('');
    };

    return (
        <Card className="shadow-sm">
            <Card.Body>
                <Card.Title className="mb-3" >Filter & Sort</Card.Title>


                <Form.Label>Price Range (₹)</Form.Label>
                <Row className="g-2 mb-3">
                    <Col>
                        <Form.Control
                            type="number"
                            placeholder="Min"
                            value={minPrice}
                            onChange={e => setMinPrice(e.target.value)}
                        />
                    </Col>
                    <Col>
                        <Form.Control
                            type="number"
                            placeholder="Max"
                            value={maxPrice}
                            onChange={e => setMaxPrice(e.target.value)}
                        />
                    </Col>
                </Row>


                <Form.Label>Duration (hrs)</Form.Label>
                <Row className="g-2 mb-3">
                    <Col>
                        <Form.Control
                            type="number"
                            placeholder="Min"
                            value={minDuration}
                            onChange={e => setMinDuration(e.target.value)}
                        />
                    </Col>
                    <Col>
                        <Form.Control
                            type="number"
                            placeholder="Max"
                            value={maxDuration}
                            onChange={e => setMaxDuration(e.target.value)}
                        />
                    </Col>
                </Row>


                <Form.Group className="mb-3">
                    <Form.Label>Airlines</Form.Label>
                    <Form.Select
                        multiple
                        value={selectedAirlines}
                        onChange={e => {
                            const opts = Array.from(e.target.selectedOptions).map(o => o.value);
                            setSelectedAirlines(opts);
                        }}
                        style={{ height: '8rem' }}
                    >
                        {airlines.map(name => (
                            <option key={name} value={name}>{name}</option>
                        ))}
                    </Form.Select>
                    <Form.Text className="text-muted">
                        Hold Ctrl (or Cmd) to select multiple
                    </Form.Text>
                </Form.Group>


                <Form.Group className="mb-3">
                    <Form.Label>Sort By</Form.Label>
                    <Form.Select
                        value={sortOption}
                        onChange={e => setSortOption(e.target.value)}
                    >
                        <option value="">— Select —</option>
                        <option value="price-asc">Price: Low to High</option>
                        <option value="price-desc">Price: High to Low</option>
                        <option value="duration-asc">Duration: Short to Long</option>
                        <option value="duration-desc">Duration: Long to Short</option>

                        <option value="name-asc">Flight Name: A–Z</option>
                        <option value="name-desc">Flight Name: Z–A</option>
                    </Form.Select>
                </Form.Group>


                <div className="d-flex justify-content-between">
                    <Button
                        size="sm"
                        onClick={handleApply}
                        className="custom-hover-btn"
                        style={{
                            backgroundColor: '#074799',
                            color: 'white',
                            border: 'none'
                        }}
                    >
                        Apply
                    </Button>

                    <Button variant="outline-secondary" size="sm" onClick={handleClear}>Clear All</Button>
                </div>
            </Card.Body>
        </Card>
    );
}

export default FlightFilters;