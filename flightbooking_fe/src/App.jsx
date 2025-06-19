import React, { useState, useEffect, useCallback } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import FlightFilters from './components/FlightFilters';
import FlightList from './components/FlightList';
import FlightFormModal from './components/FlightFormModal';
import { getAllflightApi } from './services/Allapi';

function App() {
  const [allFlights, setAllFlights] = useState([]);
  const [filteredFlights, setFilteredFlights] = useState([]);

  const [searchData, setSearchData] = useState({
    from: '',
    to: '',
    depart: ''
  });

  const [activeFilters, setActiveFilters] = useState({});
  const [activeSort, setActiveSort] = useState('');

  // 🔄 Load all flights on mount
  useEffect(() => {
    getAllflightApi()
      .then(res => {
        if (res.status === 200) {
          setAllFlights(res.data);
          setFilteredFlights(res.data);
        }
      })
      .catch(console.error);
  }, []);

  // 🔍 Search logic
  const handleSearch = () => {
    const { from, to, depart } = searchData;

    const result = allFlights.filter(flight =>
      flight.departureCity.toLowerCase().includes(from.toLowerCase()) &&
      flight.arrivalCity.toLowerCase().includes(to.toLowerCase()) &&
      (depart ? flight.departureDate === depart : true)
    );

    setFilteredFlights(result);
  };

  // ✅ Store filters and sort in state
  const handleFilterChange = useCallback(filters => {
    setActiveFilters(filters);
  }, []);

  const handleSortChange = useCallback(sortOption => {
    setActiveSort(sortOption);
  }, []);

  // 🧠 Apply filters + sorting together
  useEffect(() => {
    let result = [...allFlights];

    const { price = {}, duration = {}, airlines = [] } = activeFilters;

    // Filter by Price
    if (price.min) result = result.filter(f => f.price >= Number(price.min));
    if (price.max) result = result.filter(f => f.price <= Number(price.max));

    // Filter by Duration
    if (duration.min) result = result.filter(f => f.duration >= Number(duration.min));
    if (duration.max) result = result.filter(f => f.duration <= Number(duration.max));

    // Filter by Airline
    if (airlines.length > 0) {
      result = result.filter(f => airlines.includes(f.flightName));
    }

    // Sort
    switch (activeSort) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'duration-asc':
        result.sort((a, b) => a.duration - b.duration);
        break;
      case 'duration-desc':
        result.sort((a, b) => b.duration - a.duration);
        break;
      case 'name-asc':
        result.sort((a, b) => a.flightName.localeCompare(b.flightName));
        break;
      case 'name-desc':
        result.sort((a, b) => b.flightName.localeCompare(a.flightName));
        break;
      default:
        break;
    }

    setFilteredFlights(result);
  }, [allFlights, activeFilters, activeSort]);

  return (
    <>
      <Header />
      <SearchBar
        searchData={searchData}
        setSearchData={setSearchData}
        handleSearch={handleSearch}
      />
      <Container className="mt-4">
        <Row>
          <Col md={3}>
            <FlightFilters
              flights={allFlights}
              onFilterChange={handleFilterChange}
              onSortChange={handleSortChange}
            />
          </Col>
          <Col md={9}>
            <FlightList flights={filteredFlights} />
          </Col>
        </Row>
      </Container>
      <FlightFormModal
        onFlightAdded={() => {
          getAllflightApi().then(res => {
            if (res.status === 200) {
              setAllFlights(res.data);
              setFilteredFlights(res.data);
            }
          });
        }}
      />
    </>
  );
}

export default App;
