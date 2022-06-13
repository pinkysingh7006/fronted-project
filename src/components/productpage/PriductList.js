import React, { useEffect, useState } from "react";
import { rootName, APILIST } from "../../constent";
import Loading from "../loading/Loading";
// import "./product.css";
import "./productstyle.css";

import Products from "./Products";
import Nav from "../heading/Nav";
import SearchForm from "../search/SearchForm";

const ProductList = () => {
  const [productList, setProductList] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    getProductlist();
  }, []);

  const getProductlist = async () => {
    setloading(true);
    let result = await fetch(`${rootName}${APILIST.PRODUCTLIST}`);
    result = await result.json();
    setProductList(result);
    setloading(false);
  };
  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <Nav />
      <SearchForm setProductList={setProductList} />
      <section className="section">
        <h2 className="section-title">Favorite Drink List</h2>
        {productList?.length > 0 ? (
          <div className="cocktails-center">
            {productList?.map((item) => {
              return <Products key={item._id} {...item} />;
            })}
          </div>
        ) : (
          <h2 className="section-title">Sorry, No Result Found...</h2>
        )}
      </section>
    </div>
  );
};

export default ProductList;
