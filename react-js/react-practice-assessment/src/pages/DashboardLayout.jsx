import { Container, Row, Col, Nav } from 'react-bootstrap';
import { Outlet, Link } from 'react-router-dom';

function DashboardLayout({ user }) {
  return (
    <Container fluid>
      <Row>
        {/* Sidebar */}
        <Col md={3} className="bg-light vh-100 p-3">
          <h5>Dashboard</h5>
          <p>Welcome, {user.name}</p>
          <Nav className="flex-column">
            <Nav.Link as={Link} to="/dashboard/profile">Profile</Nav.Link>
            <Nav.Link as={Link} to="/dashboard/settings">Settings</Nav.Link>
          </Nav>
        </Col>

        {/* Main content */}
        <Col md={9} className="p-4">
          <Outlet /> {/* Nested route content renders here */}
        </Col>
      </Row>
    </Container>
  );
}

export default DashboardLayout;
