import React from 'react'
import { FaCamera, FaLock, FaUser } from 'react-icons/fa';

const Profile = () => {
  return (
<div className="profile-container">
      <h1 className="profile-title">Update Profile</h1>
      <form className="profile-form" >
        <div className="profile-image-section">
          <label htmlFor="profileImage" className="profile-image-label">
            <div className="profile-placeholder">
               
                <img src="https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt='Avatar'  className="profile-image" />
              </div>
            <FaCamera className="profile-camera-icon" />
          </label>
          <input
            type="file"
            id="profileImage"
            accept="image/*"
            className="profile-image-input"
          />
        </div>

        <div className="input-group">
          <FaUser className="input-icon" />
          <input
            type="text"
            placeholder="Update Name"
            className="profile-input"
          />
        </div>

        <div className="input-group">
          <FaLock className="input-icon" />
          <input
            type="password"
            placeholder="Old Password"
            className="profile-input"
          />
        </div>

        <div className="input-group">
          <FaLock className="input-icon" />
          <input
            type="password"
            placeholder="New Password"
            
            
            className="profile-input"
          />
        </div>

        <button type="submit" className="profile-button">Update Profile</button>
      </form>
    </div>
  )
}

export default Profile
