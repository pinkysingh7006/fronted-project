/** @format */

import React from "react";
import { useFormik } from "formik";
import { rootName, APILIST } from "../../constent";

const initialValues = {
  search: " ",
};

export default function SearchForm(props) {
  const formik = useFormik({
    initialValues,
  });

  async function searchDrink(searchvalue) {
    // console.log("searchvalue", searchvalue);
    const response = await fetch(
      `${rootName}${APILIST.SEARCHPRODUCT}/${searchvalue ? searchvalue : " "}`
    );
    const data = await response.json();
    props.setProductList(data);
  }

  return (
    <section className="section search">
      <form
        className="search-form"
        onSubmit={(values) => {
          // console.log("Search data", values);
          searchDrink(values.search);
        }}
      >
        <div className="form-control">
          <label htmlFor="name">search your favorite Drinks</label>
          <input
            type="text"
            name="search"
            id="search"
            onChange={(e) => (
              formik.handleChange(e), searchDrink(e.target.value)
            )}
            value={formik.values.search}
          />
          <br />
          <br />
        </div>
      </form>
    </section>
  );
}
