import React from "react";

const Post = () => {
  return (
    <>
      <div className="container text-white mt-5 mb-5">
        <div className="row">
          <div className="col-md-12">
            <h1 className="fw-bold text-white mb-4 display-4">My fisrt blog</h1>
            <img
              src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg"
              alt="Exploring the Art of Writing"
              className="img-fluid mb-4"
              style={{
                borderRadius: "10px",
                maxHeight: "500px",
                objectFit: "cover",
                width: "100%",
              }}
            />
            <p className="mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
              hic.
            </p>
            <hr />
            <h3 className="mt-5 mb-4">Leave a Comment</h3>
            <form>
              <div className="mb-3">
                <label htmlFor="comment" className="form-label">
                  Comment
                </label>
                <textarea
                  className="form-control"
                  id="comment"
                  rows="4"
                  placeholder="Write your comment here"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit Comment
              </button>
            </form>

            <hr />

            <h3 className="mt-5 mb-4">Comments</h3>
            <div className="bg-secondary p-3 rounded mb-3 d-flex">
              <img
                src="https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="John Doe"
                className="rounded-circle me-3"
                style={{ width: "50px", height: "50px", objectFit: "cover" }}
              />
              <div>
                <h5 className="mb-1">No name</h5>
                <p className="mb-0">no need</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
