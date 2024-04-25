import React from 'react';
import { getUserDetails } from '../service/AuthService';

const Profile = () => {
  const { name, username, email } = getUserDetails();

  return (
    <div className="container mt-5">
      <div className="card">
        <h1 className="card-header">Profile</h1>
        <div className="card-body">
          <p className="card-text"><strong>Name:</strong> {name}</p>
          <p className="card-text"><strong>Username:</strong> {username}</p>
          <p className="card-text"><strong>Email:</strong> {email}</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
