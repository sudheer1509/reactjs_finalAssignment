import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Login from "./Components/Login/Login";
import Dashboard from "./Components/Dashboard/Dashboard";
import Products from "./Components/Products/Products";
import AddProduct from "./Components/Products/AddProduct";
import Accounts from "./Components/Accounts/Accounts";
// import { connect } from "react-redux";
// import { login } from "./Components/Redux/Actions";

function App({ isLogin }) {
  return (
    <>
      <Header isLoggeddin={isLogin} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/addproducts" element={<AddProduct />} />
          <Route path="/accounts" element={<Accounts />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
// const mapStateToProps = ({ login: { isLogin } }) => ({
//   isLogin,
// });
// const mapStateToProps = (state) => {
//   return state;
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     loginStatus: () => dispatch(login()),
//   };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;
