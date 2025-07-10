import React, { use } from 'react';
import { useState, useEffect } from 'react';
import {
  Container,
  Row,
  Navbar,
  Nav,
  Button
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReusableCard from './assets/Carddd';
import ResponsiveTable from './assets/ResponsiveTable';


function App() {

  const [rows, setRows] = useState([])
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const url = 'https://jsonplaceholder.typicode.com/todos';
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setRows(data);
        setLoading(false);
        // console.log("rows: ", data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
    }, []);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     console.log("Tick");
  //   }, 1000);
  //           // Cleanup function to clear the interval
  //           // This is important to prevent memory leaks
  //           // and ensure the interval stops when the component unmounts
  //           // This is a common pattern in React to manage side effects
  //   return () => {
  //     clearInterval(intervalId); // ✅ Cleaned up
  //   };
  // }, []);

  return (
    <div style={{ marginLeft: '3rem' }}>
      {/* Top Navigation Bar */}
      <Navbar bg="dark" variant="dark" expand="md" className="mb-4">
        <Container>
          <Navbar.Brand href="#">MyApp</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Responsive Card Example */}
      <div style={{ backgroundColor: '#f8f9fa', padding: '2rem 0' }}>
        <Container>
          <Row>
            <ReusableCard 
              title="Card_1: title - Simple usage" 
              text="This is my custom card description - Simple usage with defaults: __without children component."
            />

            <ReusableCard 
              title="Card_2: title - With custom sizing and children component: Buttons" 
              text="With children component: Buttons, which requires the component-tag to wrap the button-component"
              mdSize={4}
              smSize={12}
              className="shadow-lg border-primary"
            >
              <Button variant="primary">Buy Now</Button>
              <Button variant="outline-secondary" className="ms-2">Learn More</Button>
            </ReusableCard>

            <ReusableCard 
              title="Card_3: title - With custom sizing and children component: Buttons" 
              text="This card has a children component"
              mdSize={4}
              smSize={12}
              className="shadow-lg border-primary"
            >
              <ReusableCard 
                title="Children Card component" 
                text="This is my custom card inside another card"
                mdSize={12}
                smSize={12}
                className="shadow-lg border-primary"
              />
            </ReusableCard>

          </Row>
        </Container>
      </div>

      {/* Responsive Table Example */}
      <div className="mt-5">
        <Container>
          <h2 className="mb-4">Responsive Table Example</h2>
          <p>This table is responsive and will adjust to different screen sizes.</p>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ResponsiveTable 
              rows={rows}
              className="table table-striped table-bordered"
            />
           )}
        </Container>
      </div>
    </div>
  );
}

export default App;
