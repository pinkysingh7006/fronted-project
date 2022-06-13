import React, { useEffect, useState } from "react";
import { rootName, APILIST } from "../../constent";
import { useParams, useNavigate } from "react-router-dom";

function UpdateProduct() {
  const { _id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState([]);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [info, setInfo] = useState("");
  const [glass, setGlass] = useState("");
  const [image, setImage] = useState("");


  useEffect(() => {
    updateProductdata();
  }, []);

  const updateProductdata = async () => {
    let result = await fetch(`${rootName}${APILIST.SINGLEPRODUCT}/${_id}`);
    result = await result.json();
    setTitle(result.title);
    setPrice(result.price);
    setDescription(result.description);
    setCategory(result.category);
    setInfo(result.info);
    setGlass(result.glass);
    setImage(result.image);
    return result;
  };

  const updateProduct = async (e) => {
    e.preventDefault();
    let result = await fetch(`${rootName}${APILIST.UPDATEPRODUCT}/${_id}`, {
      method: "put",
      body: JSON.stringify({
        title,
        price,
        description,
        category,
        info,
        glass,
        image,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    if (result.acknowledged == true) {
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
              <h2>Update Your Drink</h2>
            </div>
            <form>
              <table>
                <thead>
                  <tr>
                    <td>
                      <label htmlFor="title">Title: </label>
                      <input
                        type="text"
                        id="title"
                        name="title"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                      />
                    </td>
                    <td>
                      <br />
                      <label htmlFor="price">Price: </label>
                      <input
                        type="text"
                        id="price"
                        name="price"
                        onChange={(e) => setPrice(e.target.value)}
                        value={price}
                      />

                      <br />
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <label htmlFor="description">Description: </label>
                      <input
                        type="text"
                        id="description"
                        name="description"
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                      />

                      <br />
                    </td>
                    <td>
                      <label htmlFor="category">Category: </label>
                      <input
                        type="text"
                        id="category"
                        name="category"
                        onChange={(e) => setCategory(e.target.value)}
                        value={category}
                      />

                      <br />
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <label htmlFor="info">Info: </label>
                      <input
                        type="text"
                        id="info"
                        name="info"
                        onChange={(e) => setInfo(e.target.value)}
                        value={info}
                      />

                      <br />
                    </td>
                    <td>
                      <label htmlFor="glass">Glass: </label>
                      <input
                        type="text"
                        id="glass"
                        name="glass"
                        onChange={(e) => setGlass(e.target.value)}
                        value={glass}
                      />

                      <br />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label htmlFor="image">Image: </label>
                      <input
                        type="text"
                        id="image"
                        name="image"
                        onChange={(e) => setImage(e.target.value)}
                        value={image}
                      />

                      <br />
                    </td>
                  </tr>
                </thead>
              </table>
              <div className="card-body">
                <button
                  className="btn btn-dark btn-lg download-button"
                  type="submit"
                  onClick={(e) => updateProduct(e)}
                >
                  Update Product
                </button>
              </div>
            </form>
          </div>
        </div>
      </center>
    </div>
  );
}

export default UpdateProduct;
