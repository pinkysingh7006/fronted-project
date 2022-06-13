import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
// import "./stylefile.css";

const Nav = () => {
  const auth = localStorage.getItem("userList");
  const navigate = useNavigate();

  let userDetail = JSON.parse(auth);
  const userId = userDetail._id;
  // console.log("authUUUUUUUUUU", userDetail._id);
  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  const submit = () => {
    confirmAlert({
      title: "Confirm to Log Out",
      message: "Are you sure to do this.",
      buttons: [
        {
          label: "Yes",
          onClick: () => logout(),
        },
        {
          label: "No",
        },
      ],
    });
  };

  return (
    <div className="navstyle">
      {/* <img
        alt="logo"
        className="logo"
        src="https://webneel.com/daily/sites/default/files/images/daily/06-2013/30-world-wildlife-foundation-wwf-logo-parody.jpg"
      /> */}
      <div className="logo-in">
        <img
          alt="logo"
          className="logo"
          src="https://webneel.com/daily/sites/default/files/images/daily/06-2013/30-world-wildlife-foundation-wwf-logo-parody.jpg"
        />

        <a className="navbar-brand">justChill</a>
      </div>
      {auth ? (
        <ul>
          <li>
            <Link to="/productlist">Products</Link>
            <Link to="/add">Add Product</Link>
            {/* <Link to="/update/:id">Update Product</Link> */}
            <Link to={`/profile/${userId}`}>Profile</Link>
            <Link
              className="btn btn-dark btn-lg btn-details"
              onClick={submit}
              to="/signup"
            >
              Logout
            </Link>
          </li>
        </ul>
      ) : (
        <ul className="nav-right">
          {/* <Link to="/login">Log In</Link> */}
          {/* <Link to="/signup">SignUp</Link> */}
        </ul>
      )}
    </div>
  );
};

export default Nav;
