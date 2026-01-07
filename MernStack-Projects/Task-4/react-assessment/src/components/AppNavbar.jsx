import { Navbar, Container, Nav, Button } from 'react-bootstrap';

function AppNavbar({ isLoggedIn, user, login, logout }) {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>Auth App</Navbar.Brand>

        <Nav className="ms-auto">
          {!isLoggedIn ? (
            <Button variant="success" onClick={login}>
              Login
            </Button>
          ) : (
            <>
              <Navbar.Text className="me-3">
                Welcome, {user.name}
              </Navbar.Text>
              <Button variant="danger" onClick={logout}>
                Logout
              </Button>
            </>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
