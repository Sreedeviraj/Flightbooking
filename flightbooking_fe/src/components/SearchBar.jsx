
import React from 'react';
import { Row, Col, Form, Button, Container } from 'react-bootstrap';
import '../App.css';




function SearchBar({ searchData, setSearchData, handleSearch }) {
    const handleChange = (e) => {
        setSearchData({ ...searchData, [e.target.name]: e.target.value });
    };

    return (
        <Container className="mt-4">
            <div className="p-4 bg-white rounded shadow" style={{ maxWidth: '960px', margin: '0 auto' }}>
                <Form onSubmit={(e) => { e.preventDefault(); handleSearch(); }}>
                    <Row className="align-items-end g-3">
                     
                        <Col md={3}>
                            <Form.Label>From</Form.Label>
                            <Form.Control
                                name="from"
                                placeholder="City or airport"
                                value={searchData.from}
                                onChange={handleChange}
                                className="rounded-pill py-2"
                            />
                        </Col>

                     
                        <Col md={3}>
                            <Form.Label>To</Form.Label>
                            <Form.Control
                                name="to"
                                placeholder="City or airport"
                                value={searchData.to}
                                onChange={handleChange}
                                className="rounded-pill py-2"
                            />
                        </Col>

                   
                        <Col md={2}>
                            <Form.Label>Depart</Form.Label>
                            <Form.Control
                                type="date"
                                name="depart"
                                value={searchData.depart}
                                onChange={handleChange}
                                className="rounded-pill py-2"
                            />
                        </Col>

                   
                        <Col md={2}>
                            <Form.Label>Return</Form.Label>
                            <Form.Control
                                type="date"
                                name="return"
                                value={searchData.return}
                                onChange={handleChange}
                                className="rounded-pill py-2"
                            />
                        </Col>

                     
                        <Col md={2}>
                            <Button
                                type="submit"
                                  className="w-100 rounded-pill py-2 mt-3 custom-hover-btn"
                                style={{ backgroundColor: '#074799', color: 'white', border: 'none' }}
                            >Search</Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        </Container>
    );
}

export default SearchBar;
