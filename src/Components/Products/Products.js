import React from "react";
import "./Products.css";
import { useNavigate } from "react-router-dom";

export default function Products() {
  const navigate = useNavigate();
  const products = JSON.parse(localStorage.getItem("apidata")).productsPage
    .products;
  const categories = JSON.parse(localStorage.getItem("apidata")).productsPage
    .categories;
  console.log(categories);
  console.log(products);
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8 box1">
          {products && products.length !== 0 ? (
            <div className="productsScroll">
              <table>
                <thead>
                  <tr>
                    <th>&nbsp;</th>
                    <th>PRODUCT NAME</th>
                    <th>UNIT SOLD</th>
                    <th>IN STOCK</th>
                    <th>EXPIRED DATE</th>
                    <th>&nbsp;</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((item) => (
                    <tr key={item.name}>
                      <td>
                        <input type="checkbox" />
                      </td>
                      <td>{item.name}</td>
                      <td>{item.unitSold}</td>
                      <td>{item.stock}</td>
                      <td>{item.expireDate}</td>
                      <td>
                        <i className="fa fa-trash" aria-hidden="true"></i>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            ""
          )}
          <div className="btnDiv">
            <buton
              className="headerBtn1"
              onClick={() => navigate("./addproducts")}
            >
              Add new product
            </buton>
          </div>
          <div className="btnDiv">
            <buton className="headerBtn2">delete selected product</buton>
          </div>
        </div>
        <div className="col-lg-3 box2">
          {categories && categories.length !== 0 ? (
            <table>
              <div className="box2heading">Product Categories</div>
              <tbody>
                {categories.map((item) => (
                  <tr key={item}>
                    <td>{item}</td>
                    <td>
                      <i className="fa fa-trash" aria-hidden="true"></i>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            ""
          )}
          <div className="btnDiv2">
            <buton className="headerBtn3">Add new product</buton>
          </div>
        </div>
      </div>
    </div>
  );
}
