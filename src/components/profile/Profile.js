import React, { useEffect, useState } from "react";
import { rootName, APILIST } from "../../constent";
import { useParams, useNavigate } from "react-router-dom";

function Profile() {
  const { _id } = useParams();
  const navigate = useNavigate();
  // const auth = localStorage.getItem("userList");

  const [name, setName] = useState("");
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState("");

  useEffect(() => {
    updateProductdata();
  }, []);

  const updateProductdata = async () => {
    let result = await fetch(`${rootName}${APILIST.PROFILEUSER}/${_id}`);
    result = await result.json();
    // console.log("result", result);
    setName(result.name);
    setEmail(result.email);
    setPassword(result.password);
    return result;
  };

  const updateProduct = async (e) => {
    e.preventDefault();
    let result = await fetch(`${rootName}${APILIST.UPDATEPROFILE}/${_id}`, {
      method: "put",
      body: JSON.stringify({
        name,
        email,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    // console.log("result", result);
    if (result.matchedCount > 0) {
      alert("Profile Updated Sucessfully...");
      navigate("/productlist");
    }
  };

  return (
    <div>
      <center>
        <img
          alt="logo"
          className="img-login"
          src="https://webneel.com/daily/sites/default/files/images/daily/06-2013/30-world-wildlife-foundation-wwf-logo-parody.jpg"
        />
        <div className="pricing-column-login col-lg-4 col-md-4">
          <div className="card">
            <div className="card-header">
              <h2>Update Your Profile</h2>
            </div>
            <br />
            <form>
              <label htmlFor="title">Name: </label>
              <input
                type="text"
                id="name"
                name="name"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              <br />
              <label htmlFor="price">Email: </label>
              <input
                type="text"
                id="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <br />

              <label htmlFor="description">Password: </label>
              <input
                type="text"
                id="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <br />
              <div className="card-body">
                <button
                  className="btn btn-dark btn-lg download-button"
                  type="submit"
                  onClick={(e) => updateProduct(e)}
                >
                  Update Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      </center>
    </div>
  );
}

export default Profile;
