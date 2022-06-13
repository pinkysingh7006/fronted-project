// import Nav from "./components/Nav";
// import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./components/userlist/SignUp";
import LogIn from "./components/userlist/LogIn";
import OuterPage from "./components/outerpage/OuterPage";
import PageNotFound from "./components/common/Pagenotfound";
import PrivateRoute from "./components/common/PrivateRoute";
import AddProduct from "./components/productpage/AddProduct";
import ProductList from "./components/productpage/PriductList";
import SingleProduct from "./components/productpage/SingleProduct";
import UpdateProduct from "./components/productpage/UpdatePoduct";
import Profile from "./components/profile/Profile";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Nav /> */}
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route path="/productlist" element={<ProductList />} />
            <Route path="/singleproduct/:_id" element={<SingleProduct />} />
            <Route path="/add" element={<AddProduct />} />
            <Route path="/update/:_id" element={<UpdateProduct />} />
            <Route path="/profile/:_id" element={<Profile />} />
            {/* <Route path="/logout" element={<h1>Logout listing component</h1>} /> */}
          </Route>
          <Route path="/" element={<OuterPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
