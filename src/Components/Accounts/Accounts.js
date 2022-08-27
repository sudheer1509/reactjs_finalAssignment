// import { useState } from "react";
// import "./Accounts.css";

// export default function Accounts() {
//   const [account, setAccount] = useState({});
//   const accounts = JSON.parse(localStorage.getItem("apidata")).accountsPage;
//   const handleChange = (e) => {
//     setAccount({ ...account, [e.target.name]: e.target.value });
//   };
//   return (
//     <div className="accountsContainer container">
//       <div className="row">
//         <div className="section1 col-lg-12">
//           <div className="accountHeading">List of Accounts</div>
//           <div className="accountfield">
//             <label>Accounts</label>
//             <br />
//             <select>
//               <option value="Select Account">Select Account</option>
//               <option
//                 value="Admin"
//                 onClick={() => {
//                   console.log(accounts.Admin);
//                   setAccount(accounts.Admin);
//                 }}
//               >
//                 Admin
//               </option>
//               <option
//                 value="Editor"
//                 onClick={() => {
//                   setAccount(accounts.Editor);
//                 }}
//               >
//                 Editor
//               </option>
//               <option
//                 value="Merchant"
//                 onClick={() => {
//                   setAccount(accounts.Merchant);
//                 }}
//               >
//                 Merchant
//               </option>
//               <option
//                 value="Customer"
//                 onClick={() => {
//                   setAccount(accounts.Customer);
//                 }}
//               >
//                 Customer
//               </option>
//             </select>
//           </div>
//         </div>
//         <div
//           className="col-lg-5"
//           style={{ paddingLeft: "0", paddingRight: "40px" }}
//         >
//           <div className="section2">
//             <div className="accountHeading">Change Avatar</div>
//             <div className="accountfield">
//               <img
//                 src="https://dummyimage.com/300"
//                 alt="dummyimage"
//                 className="accountsmagesection"
//               />
//               <input id="file" type="file" style={{ display: "none" }}></input>
//               <button
//                 className="accountsimageuploadbtn"
//                 onclick="document.getElementById('file').click();"
//               >
//                 Upload product image
//               </button>
//             </div>
//           </div>
//         </div>

//         <div className="col-lg-7" style={{ padding: "0" }}>
//           <div className="section2">
//             <div className="accountHeading">Account Settings</div>
//             <div className="row">
//               <div className="col-lg-6">
//                 <div className="section3Field">
//                   <label>Account Name</label>
//                   <br />
//                   <input
//                     type="text"
//                     name="name"
//                     value={account.name}
//                     onChange={() => handleChange()}
//                   />
//                 </div>
//               </div>
//               <div className="col-lg-6">
//                 <div className="section3Field">
//                   <label>Account Email</label>
//                   <br />
//                   <input
//                     type="email"
//                     name="email"
//                     value={account.email}
//                     onChange={() => handleChange()}
//                   />
//                 </div>
//               </div>
//               <div className="col-lg-6">
//                 <div className="section3Field">
//                   <label>Password</label>
//                   <br />
//                   <input
//                     type="password"
//                     name="password"
//                     value={account.password}
//                     onChange={() => handleChange()}
//                   />
//                 </div>
//               </div>
//               <div className="col-lg-6">
//                 <div className="section3Field">
//                   <label>Re-enter Password</label>
//                   <br />
//                   <input
//                     type="password"
//                     name="password"
//                     value={account.password}
//                     onChange={() => handleChange()}
//                   />
//                 </div>
//               </div>
//               <div className="col-lg-6">
//                 <div className="section3Field">
//                   <label>Phone</label>
//                   <br />
//                   <input type="text" value={account.phone} />
//                 </div>
//               </div>
//               <div className="col-lg-6">
//                 <button className="AccountsUpdateBtn">
//                   Update your profile
//                 </button>
//               </div>
//               <div className="col-lg-12">
//                 <button className="AccountsDeleteeBtn">
//                   Delete your account
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import "./Accounts.css";

export default function Accounts() {
  const [account, setAccount] = useState({});
  const [selectedOption, setSelectedOption] = useState("select Account");
  const accounts = JSON.parse(localStorage.getItem("apidata")).accountsPage;
  console.log(accounts.Admin);
  const handleChange = (e) => {
    console.log(e.target.value);
    setSelectedOption(e.target.value);
    console.log(selectedOption);
  };
  const newKeys = Object.keys(accounts);
  console.log(newKeys);
  return (
    <div className="accountsContainer container">
      <div className="row">
        <div className="section1 col-lg-12">
          <div className="accountHeading">List of Accounts</div>
          <div className="accountfield">
            <label>Accounts</label>
            <br />
            <select onChange={(e) => handleChange(e)} value={selectedOption}>
              <option value="Select Account">Select Account</option>
              {newKeys.map((key) => (
                <option value={key}>{key}</option>
              ))}
            </select>
          </div>
        </div>
        <div
          className="col-lg-5"
          style={{ paddingLeft: "0", paddingRight: "40px" }}
        >
          <div className="section2">
            <div className="accountHeading">Change Avatar</div>
            <div className="accountfield">
              <img
                src="https://dummyimage.com/300"
                alt="dummyimage"
                className="accountsmagesection"
              />
              <input id="file" type="file" style={{ display: "none" }}></input>
              <button
                className="accountsimageuploadbtn"
                onClick="document.getElementById('file').click();"
              >
                Upload product image
              </button>
            </div>
          </div>
        </div>

        <div className="col-lg-7" style={{ padding: "0" }}>
          <div className="section2">
            <div className="accountHeading">Account Settings</div>
            <div className="row">
              <div className="col-lg-6">
                <div className="section3Field">
                  <label>Account Name</label>
                  <br />
                  <input
                    type="text"
                    name="name"
                    value={account.name}
                    onChange={() => handleChange()}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="section3Field">
                  <label>Account Email</label>
                  <br />
                  <input
                    type="email"
                    name="email"
                    value={account.email}
                    onChange={() => handleChange()}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="section3Field">
                  <label>Password</label>
                  <br />
                  <input
                    type="password"
                    name="password"
                    value={account.password}
                    onChange={() => handleChange()}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="section3Field">
                  <label>Re-enter Password</label>
                  <br />
                  <input
                    type="password"
                    name="password"
                    value={account.password}
                    onChange={() => handleChange()}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="section3Field">
                  <label>Phone</label>
                  <br />
                  <input type="text" value={account.phone} />
                </div>
              </div>
              <div className="col-lg-6">
                <button className="AccountsUpdateBtn">
                  Update your profile
                </button>
              </div>
              <div className="col-lg-12">
                <button className="AccountsDeleteeBtn">
                  Delete your account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
