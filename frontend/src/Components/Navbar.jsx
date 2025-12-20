import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      <nav className="navbar d-flex justify-content-between align-items-center p-3 ">
        <Link to={"/"}>
          <h1 className="mx-5 text-white fs-2 fw-bold"> VoiceOfJahid </h1>
        </Link>
        <div className="d-flex align-items-center">
          {!isLogin ? (
            <Link to={"/login"}>
              <button className="btn_sign max-3">Sign In</button>
            </Link>
          ) : (
            <div className="dropdown">
              <div
                className="avatat-container pointer rounded-circle overflow-hidden bg-info"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ width: "40px", height: "40px", cursor: "pointer" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="img-fluid h-100 w-100"
                  style={{ objectFit: "cover" }}
                  alt=""
                />
              </div>
              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-dark">
                <li>
                  <Link className="dropdown-item" to="/dashboard">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to={`/profile/598654`}>
                    Profile
                  </Link>
                </li>
                <li>
                  <a className="dropdown-item " style={{ cursor: "pointer" }}>
                    Sign Out
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
