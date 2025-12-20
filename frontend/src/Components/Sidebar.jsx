import React from 'react'
import { Link } from 'react-router-dom'
import { FaHome, FaPlusSquare, FaFileAlt, FaUsers } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <>
         <div className="bg-dark text-white vh-100" style={{ width: '250px' }}>
            <div className="p-3">
        <ul className="nav flex-column">
          <li className="nav-item mb-3">
            <Link className="nav-link text-white" to="/dashboard">
              <FaHome className="me-2" /> Dashboard
            </Link>
          </li>
          <li className="nav-item mb-3">
            <Link className="nav-link text-white" to="/dashboard/addpost">
              <FaPlusSquare className="me-2" /> Add Post
            </Link>
          </li>
          <li className="nav-item mb-3">
            <Link className="nav-link text-white" to="/dashboard/users">
              <FaUsers className="me-2" /> All Users
            </Link>
          </li>
          <li className="nav-item mb-3">
            <Link className="nav-link text-white" to="/dashboard/allpost">
              <FaFileAlt className="me-2" /> All Posts
            </Link>
          </li>
        </ul>
      </div>
         </div>
    </>
  )
}

export default Sidebar
