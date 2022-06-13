import React, { useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { rootName, APILIST } from "../../constent";
import { useNavigate } from "react-router-dom";
// import "./stylefile.css";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const validationSchema = yup.object({
  name: yup.string().required("Required!"),
  email: yup.string().email("Invalid email formet.").required("Required!"),
  password: yup.string().required("Required!"),
});

const handleSignup = async (values) => {
  let result = await fetch(`${rootName}${APILIST.SIGNUP}`, {
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

function SignUp() {
  const navigate = useNavigate();
  // useEffect(() => {
  //   const auth = localStorage.getItem("userList");
  //   if (auth) {
  //     navigate("/");
  //   }
  // }, []);

  return (
    <div className="signupform">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values, submitProps) => {
          // console.log("values", values);
          submitProps.resetForm();
          const response = await handleSignup(values);
          // console.log("response", response);
          localStorage.setItem("userList", JSON.stringify(response));
          if (response) {
            navigate("/");
          }
        }}
      >
        <Form>
          <center>
            <div>
              <img
                alt="logo"
                className="img-login"
                src="https://webneel.com/daily/sites/default/files/images/daily/06-2013/30-world-wildlife-foundation-wwf-logo-parody.jpg"
              />
            </div>
            <div className="pricing-column-login col-lg-4 col-md-4">
              <div className="card">
                <div className="card-header">
                  <h2>Sign Up</h2>
                </div>
                <br />
                <br />
                <div className="card-body">
                  <label htmlFor="name">Name: </label>
                  <br />
                  <Field type="text" id="name" name="name" />
                  <ErrorMessage name="name">
                    {(errorMsg) => (
                      <div style={{ color: "red" }}>{errorMsg}</div>
                    )}
                  </ErrorMessage>
                  <div className="input-fild">
                    <label htmlFor="email">Email: </label>
                    <br />
                    <Field type="email" id="email" name="email" />
                    <ErrorMessage name="email">
                      {(errorMsg) => (
                        <div style={{ color: "red" }}>{errorMsg}</div>
                      )}
                    </ErrorMessage>
                  </div>
                  <label htmlFor="password">Password: </label>
                  <br />
                  <Field type="text" id="password" name="password" />
                  <ErrorMessage name="password">
                    {(errorMsg) => (
                      <div style={{ color: "red" }}>{errorMsg}</div>
                    )}
                  </ErrorMessage>
                  <br />
                  <button
                    className="btn btn-dark btn-lg download-button"
                    type="submit"
                  >
                    Sign Up
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

export default SignUp;
