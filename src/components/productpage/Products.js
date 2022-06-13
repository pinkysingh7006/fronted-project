import React from "react";
import { Link } from "react-router-dom";
function Products(props) {
  // console.log("propsiouuuuuuuuu", props);
  // let id = props.index;
  // console.log(props._id, "id");
  return (
    <article className="cocktail">
      <div className="img-container">
        <img src={props?.image} alt="" />
      </div>
      <div className="cocktail-footer">
        <h3>{props?.title}</h3>
        <h4>{props?.glass}</h4>
        <p>{props?.category}</p>
        <p>{`Price: ${props?.price} $`}</p>
        <Link
          to={`/singleproduct/${props._id}`}
          className="btn btn-dark  download-button"
        >
          details
        </Link>
      </div>
    </article>
  );
}

export default Products;
