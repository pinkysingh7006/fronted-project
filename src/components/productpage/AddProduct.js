import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { rootName, APILIST } from "../../constent";
import { useNavigate } from "react-router-dom";

const initialValues = {
  title: "",
  price: "",
  description: "",
  category: "",
  info: "",
  glass: "",
  image: "",
};

const validationSchema = yup.object({
  title: yup.string().required("Required!"),
  price: yup.string().required("Required!"),
  description: yup.string().required("Required!"),
  category: yup.string().required("Required!"),
  info: yup.string().required("Required!"),
  glass: yup.string().required("Required!"),
  image: yup.string().required("Required!"),
});

function AddProduct() {
  const navigate = useNavigate();
  const userid = JSON.parse(localStorage.getItem("userList"))._id;
  // console.log("userid", userid);
  const [userId, SetUserId] = useState([]);
  useEffect(() => {
    SetUserId(userid);
  }, []);

  const addProductdata = async (values) => {
    let result = await fetch(`${rootName}${APILIST.ADDPRODUCT}`, {
      method: "post",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    return result;
    // console.log(result);
  };

  //   useEffect(() => {
  //     const auth = localStorage.getItem("userList");
  //     if (auth) {
  //       navigate("/");
  //     }
  //   }, []);

  return (
    <div className="signupform">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values, submitProps) => {
          // console.log("values", values);
          submitProps.resetForm();
          values = {
            category: values.category,
            glass: values.glass,
            info: values.info,
            description: values.description,
            price: values.price,
            title: values.title,
            image: values.image,
            userId: userId,
          };
          // console.log("values", values);
          const response = await addProductdata(values);
          // console.log("response", response);
          localStorage.setItem("userList", JSON.stringify(response));
          if (response) {
            navigate("/productlist");
          }
        }}
      >
        <Form>
          <center>
            <img
              alt="logo"
              className="img-login"
              src="https://webneel.com/daily/sites/default/files/images/daily/06-2013/30-world-wildlife-foundation-wwf-logo-parody.jpg"
            />
            <div className="pricing-column-login col-lg-4 col-md-4">
              <div className="card">
                <div className="card-header">
                  <h2>Add Your Favorite Drink</h2>
                </div>
                <br />
                <table>
                  <thead>
                    <tr>
                      <td>
                        <label htmlFor="title">Title: </label>
                        <br />
                        <Field type="text" id="title" name="title" />
                        <ErrorMessage name="title">
                          {(errorMsg) => (
                            <div style={{ color: "red" }}>{errorMsg}</div>
                          )}
                        </ErrorMessage>
                      </td>
                      <td>
                        <label htmlFor="price">Price: </label>
                        <br />
                        <Field type="text" id="price" name="price" />
                        <ErrorMessage name="price">
                          {(errorMsg) => (
                            <div style={{ color: "red" }}>{errorMsg}</div>
                          )}
                        </ErrorMessage>
                      </td>
                    </tr>
                    <br />
                    <tr>
                      <td>
                        <label htmlFor="description">Description:</label>
                        <br />
                        <Field
                          type="text"
                          id="description"
                          name="description"
                        />
                        <ErrorMessage name="description">
                          {(errorMsg) => (
                            <div style={{ color: "red" }}>{errorMsg}</div>
                          )}
                        </ErrorMessage>
                      </td>
                      <td>
                        <label htmlFor="category">Category: </label>
                        <br />
                        <Field type="text" id="category" name="category" />
                        <ErrorMessage name="category">
                          {(errorMsg) => (
                            <div style={{ color: "red" }}>{errorMsg}</div>
                          )}
                        </ErrorMessage>
                      </td>
                    </tr>
                    <br />
                    <tr>
                      <td>
                        <label htmlFor="info">Information: </label>
                        <br />
                        <Field type="text" id="info" name="info" />
                        <ErrorMessage name="info">
                          {(errorMsg) => (
                            <div style={{ color: "red" }}>{errorMsg}</div>
                          )}
                        </ErrorMessage>
                      </td>
                      <td>
                        <label htmlFor="glass">Glass: </label>
                        <br />
                        <Field type="text" id="glass" name="glass" />
                        <ErrorMessage name="glass">
                          {(errorMsg) => (
                            <div style={{ color: "red" }}>{errorMsg}</div>
                          )}
                        </ErrorMessage>
                      </td>
                    </tr>
                    <br />
                    <tr>
                      <td>
                        <label htmlFor="image">Image Address: </label>
                        <br />
                        <Field type="text" id="image" name="image" />
                        <ErrorMessage name="image">
                          {(errorMsg) => (
                            <div style={{ color: "red" }}>{errorMsg}</div>
                          )}
                        </ErrorMessage>
                      </td>
                    </tr>
                  </thead>
                </table>
                <div className="card-body">
                  <button
                    className="btn btn-dark btn-lg download-button"
                    type="submit"
                  >
                    Add Product
                  </button>
                </div>
              </div>
            </div>
          </center>
        </Form>
      </Formik>
    </div>
  );
}

export default AddProduct;
