import React from 'react';

const UserCard = () => {
  const userDetails = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    address: "123 Main Street, New York, NY 10001",
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(to bottom right, #0f172a, #1e293b)',
      padding: '1rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'relative',
        WebkitBackdropFilter: 'blur(16px)',
        backdropFilter: 'blur(16px)',
        backgroundColor: 'rgba(17, 25, 40, 0.75)',
        borderRadius: '0.75rem',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        padding: '1.5rem',
        maxWidth: '24rem',
        width: '100%',
        border: '1px solid rgba(255, 255, 255, 0.125)',
        color: '#fff'
      }}>
        <div style={{
          textAlign: 'center',
          marginBottom: '1.5rem'
        }}>
          <div style={{
            fontSize: '0.875rem',
            color: '#94a3b8',
            marginBottom: '0.5rem'
          }}>
            Profile
          </div>
          <div style={{
            width: '80px',
            height: '80px',
            margin: '0 auto',
            borderRadius: '50%',
            border: '2px solid rgba(255, 255, 255, 0.125)',
            backgroundColor: 'rgba(30, 41, 59, 0.5)',
            overflow: 'hidden'
          }}>
            <img 
              src="https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png"
              alt="Profile"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </div>
        </div>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            color: '#e2e8f0'
          }}>
            <span style={{ color: '#c084fc' }}>👤</span>
            {userDetails.name}
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            color: '#e2e8f0'
          }}>
            <span style={{ color: '#c084fc' }}>✉️</span>
            {userDetails.email}
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            color: '#e2e8f0'
          }}>
            <span style={{ color: '#c084fc' }}>📞</span>
            {userDetails.phone}
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            color: '#e2e8f0'
          }}>
            <span style={{ color: '#c084fc' }}>📍</span>
            {userDetails.address}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;