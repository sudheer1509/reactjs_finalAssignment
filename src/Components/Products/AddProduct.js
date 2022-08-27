import React from "react";
import "./AddProduct.css";

export default function AddProduct() {
  return (
    <div className="apcontainer">
      <div className="apheading">Add product</div>
      <form>
        <div className="apform">
          <div className=" col-lg-6 apleftSection">
            <div className="apfield">
              <label>ProductName</label>
              <br />
              <input
                type="text"
                name="productName"
                placeholder="Enter Product Name"
              />
            </div>
            <div className="apfield">
              <label>Description</label>
              <br />
              <textarea></textarea>
            </div>
            <div className="apfield">
              <label>Category</label>
              <br />
              <select>
                <option value="Select Category">Select Category</option>
                <option value="New Arrival">New Arrival</option>
                <option value="Most Popular">Most Popular</option>
                <option value="Trending">Trending</option>
              </select>
            </div>
            <div className="apsection">
              <div className=" apfield">
                <label>Expiry Date</label>
                <br />
                <input type="date" placeholder=""></input>
              </div>
              <div className=" apfield">
                <label>Units in stock</label>
                <br />
                <input type="number"></input>
              </div>
            </div>
          </div>
          <div className="col-lg-6 aprightSection">
            <div className="apfield">
              <img
                src="https://dummyimage.com/300"
                alt="dummyimage"
                className="apimagesection"
              />
              <input id="file" type="file" style={{ display: "none" }}></input>
              <button
                className="apimageuploadbtn"
                onclick="document.getElementById('file').click();"
              >
                Upload product image
              </button>
            </div>
          </div>
        </div>
        <button className="apAddProductbtn">Add Product</button>
      </form>
    </div>
  );
}
