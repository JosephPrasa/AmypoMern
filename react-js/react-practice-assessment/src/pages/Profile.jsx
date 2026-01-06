import { useState, useEffect } from 'react';
import { Spinner, Card, Container } from 'react-bootstrap';

function Profile({ user }) {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  // Mock API call
  useEffect(() => {
    setLoading(true);

    // Simulate API fetch with setTimeout
    setTimeout(() => {
      // Mocked profile data
      const mockData = {
        name: user.name,
        email: 'reactlearnig@gmail.com',
        phone: '+91 8802354389',
        address: '123 Main Street, Kerala, India',
      };
      setProfile(mockData);
      setLoading(false);
    }, 1500); // 1.5 seconds delay
  }, [user]);

  if (loading) {
    return (
      <Container className="text-center mt-5">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Container>
    );
  }

  return (
    <Container className="mt-4">
      <Card style={{ maxWidth: '500px', margin: '0 auto' }}>
        <Card.Header>Profile Information</Card.Header>
        <Card.Body>
          <Card.Title>{profile.name}</Card.Title>
          <Card.Text>
            <strong>Email:</strong> {profile.email} <br />
            <strong>Phone:</strong> {profile.phone} <br />
            <strong>Address:</strong> {profile.address}
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Profile;