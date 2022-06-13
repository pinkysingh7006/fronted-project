import React, { useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { rootName, APILIST } from "../../constent";
import { useNavigate } from "react-router-dom";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = yup.object({
  email: yup.string().email("Invalid email formet.").required("Required!"),
  password: yup.string().required("Required!"),
});

const handleLogin = async (values) => {
  let result = await fetch(`${rootName}${APILIST.LOGIN}`, {
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

function LogIn() {
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("userList");
    if (auth) {
      navigate("/productlist");
    }
  }, []);

  return (
    <div className="signupform">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values, submitProps) => {
          //   console.log("values", values);
          submitProps.resetForm();
          const response = await handleLogin(values);
          //   console.log("response", response);
          if (response.name) {
            localStorage.setItem("userList", JSON.stringify(response));
            navigate("/productlist");
          } else {
            alert("Please Enter Valid Input.");
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
                  <h2>Log In</h2>
                </div>
                <div className="card-body">
                  <div className="input-fild">
                    <label htmlFor="email">Email: </label>
                    <br />
                    <Field type="email" id="email" name="email" />
                    <ErrorMessage name="email">
                      {(errorMsg) => (
                        <div style={{ color: "red" }}>{errorMsg}</div>
                      )}
                    </ErrorMessage>
                    <br />
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
                    Log In
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
export default LogIn;
