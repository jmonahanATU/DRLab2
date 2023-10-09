// Importing CSS styles from App.css
import './App.css';

// Importing components from their respective files
import Header from './components/header';
import Content from './components/content';
import Footer from './components/footer';

// Importing Bootstrap CSS and specific components
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// Importing necessary routing components from react-router-dom
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';

// Define the main App functional component
function App() {
  return (
    // Using BrowserRouter to handle routing
    <BrowserRouter>
      <div className="App">
        {/* Navbar component from Bootstrap */}
        <Navbar bg="primary" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="/">Navbar</Navbar.Brand>

            {/* Nav links for navigation */}
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/read">Read</Nav.Link>
              <Nav.Link href="/create">Create</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        {/* Setting up routes for different paths */}
        <Routes>
          {/* Route for the home page */}
          <Route path='/' element={<Content />} exact />

          {/* Route for creating content */}
          <Route exact path='/create' element={<Header />} />

          {/* Route for reading content */}
          <Route path='/read' element={<Footer />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

// Export the App component as the default export
export default App;
