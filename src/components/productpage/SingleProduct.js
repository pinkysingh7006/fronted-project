/** @format */

import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { rootName, APILIST } from "../../constent";
import Loading from "../loading/Loading";

function SingleProduct() {
  const { _id } = useParams();
  const navigate = useNavigate();
  const [productData, setProductData] = useState([]);
  const [loading, setloading] = useState(true);

  const getCocktail = async () => {
    setloading(true);
    try {
      const response = await fetch(
        `${rootName}${APILIST.SINGLEPRODUCT}/${_id}`
      );
      const data = await response.json();
      if (data) {
        setProductData(data);
        setloading(false);
      } else {
        setProductData(null);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCocktail();
  }, [_id]);

  const deletProductFunction = async () => {
    let result = await fetch(`${rootName}${APILIST.DELETEPRODUCT}/${_id}`, {
      method: "Delete",
    });
    result = await result.json();
    if (result?.deletedCount > 0) {
      alert("Product Deleted sucessfully...");
      navigate("/productlist");
    }
  };

  const updateProductFunction = async (_id) => {
    // console.log("_id", _id);
    getCocktail(_id);
  };

  if (loading) {
    return <Loading />;
  } else {
    const { title, image, category, info, glass, description, price, _id } =
      productData;
    return (
      <section className="section cocktail-section">
        <Link to="/productlist" className="btn btn-dark btn-lg btn-details">
          back home
        </Link>
        <>
          <h2 className="section-title">{title}</h2>
          <div className="drink">
            <img src={image} alt={title}></img>
            <div className="drink-info">
              <p>
                <span className="drink-data">Name :</span> {title}
              </p>
              <p>
                <span className="drink-data">Price :</span> {`${price} $`}
              </p>
              <p>
                <span className="drink-data">Category :</span> {category}
              </p>
              <p>
                <span className="drink-data">Info :</span> {info}
              </p>
              <p>
                <span className="drink-data">Glass :</span> {glass}
              </p>
              <p>
                <span className="drink-data">Instructons :</span>
                {description}
              </p>
              <button
                className="btn btn-dark download-button"
                type="submit"
                onClick={() => deletProductFunction(_id)}
              >
                Delete Product
              </button>

              <Link to={`/update/${_id}`}>
                <button
                  className="btn btn-dark download-button"
                  type="submit"
                  onClick={() => updateProductFunction(_id)}
                >
                  Update Product
                </button>
              </Link>
            </div>
          </div>
        </>
      </section>
    );
  }
}

export default SingleProduct;
