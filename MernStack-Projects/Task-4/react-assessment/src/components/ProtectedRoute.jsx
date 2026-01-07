import { Navigate } from 'react-router-dom';
import { Alert, Container } from 'react-bootstrap';

function ProtectedRoute({ isLoggedIn, children }) {
  if (!isLoggedIn) {
    return (
      <Container className="mt-4">
        <Alert variant="danger">
          Access denied. Please login to continue.
        </Alert>
        <Navigate to="/login" replace />
      </Container>
    );
  }

  return children;
}

export default ProtectedRoute;
