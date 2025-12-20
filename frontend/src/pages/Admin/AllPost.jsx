import React from 'react'
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

const AllPost = () => {
  const posts = [
    { id: 1, title: 'Post One', description: 'This is the first post', image: 'post1.jpg' },
    { id: 2, title: 'Post Two', description: 'This is the second post', image: 'post2.jpg' },
    { id: 3, title: 'Post Three', description: 'This is the third post', image: 'post3.jpg' },
    { id: 4, title: 'Post Four', description: 'This is the fourth post', image: 'post4.jpg' },
    { id: 5, title: 'Post Five', description: 'This is the fifth post', image: 'post5.jpg' },
    { id: 6, title: 'Post Six', description: 'This is the sixth post', image: 'post6.jpg' },
    { id: 7, title: 'Post Seven', description: 'This is the seventh post', image: 'post7.jpg' },
    { id: 8, title: 'Post Eight', description: 'This is the eighth post', image: 'post8.jpg' },
    { id: 9, title: 'Post Nine', description: 'This is the ninth post', image: 'post9.jpg' },
  ]
  const handleDelete = (postId) => {

    try {
      alert(`Delete post with ID: ${postId}`);
    } catch (error) {
      console.log('Error deleting post:', error);
    }
  }
  const handleUpdate = (postId) => {
try {
  alert(`Update post with ID: ${postId}`);
} catch (error) {
  console.log('Error updating post:', error);
}
  }
  return (
 <div className="container ">
      <h1 className="text-center mb-4 text-white">All Posts</h1>
      <div className="row">
        {posts && posts.map((post) => (
          <div className="col-md-4 mb-4" key={post.id}>
            <div className="card h-100">
              <img src='' className="card-img-top" alt={post.title} />
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.description}</p>
              </div>
              <div className="card-footer d-flex justify-content-between">
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(post._id)}
                >
                  <FaTrashAlt /> Delete
                </button>
                <button
                  className="btn btn-warning"
                  onClick={() => handleUpdate(post._id)}
                >
                  <FaEdit /> Update
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AllPost
