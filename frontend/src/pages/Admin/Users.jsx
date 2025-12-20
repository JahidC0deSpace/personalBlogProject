import React from 'react'
import { FaTrashAlt } from 'react-icons/fa';

const Users = () => {
  const Users = [
    { id: 1, FullName: 'John Doe', email: 'example@gmail.com'},
    { id: 2, FullName: 'Jane Smith', email: 'example1@gmail.com'},
    { id: 3, FullName: 'Alice Johnson', email: 'example2@gmail.com'},
    { id: 4, FullName: 'Bob Brown', email: 'example3@gmail.com'},

  ];
  const handleDelete = () => {
    try {
      alert('User Deleted Successfully');
    } catch (error) {
      console.error('Error deleting user:', error); 
    }
  };
  return (
 <div className="container ">
      <h1 className=" text-white mb-4">Users</h1>
      <div className="table-responsive">
        <table className="table table-striped table-dark">
          <thead>
            <tr>
              <th scope="col">No.</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {Users && Users.map((user, index) => (
              <tr key={user.id}>
                <th scope="row">{index + 1}</th>
                <td>{user.FullName}</td>
                <td>{user.email}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={handleDelete}
                  >
                    <FaTrashAlt /> Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Users
