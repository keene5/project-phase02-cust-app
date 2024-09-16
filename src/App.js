import customers from "./memdb.js";
import "./App.css";
import React, { useState, useEffect } from "react";
import CustomerList from "./components/CustomerList.jsx";
function log(message) {
  console.log(message);
}

export function App(params) {
  let blankCustomer = { id: -1, name: "", email: "", password: "" };
  const [formObject, setFormObject] = useState({ blankCustomer });
  const [selectedItem, setSelecteditem] = useState({ blankCustomer });
  const [customersList, setCustomers] = useState(customers);
  let mode = formObject.id >= 0 ? "Update" : "Add";
  const getCustomers = function () {
    log("in getCustomers()");
  };

  const selected = function (item) {
    console.log(item.id == formObject.id);

    console.log(item.id != selectedItem.id);

    if (item.id == formObject.id && formObject.id == selectedItem.id) {
      return "selected";
    } else {
      return "";
    }
  };

  const handleListClick = function (item) {
    log("in handleListClick()");
    if (selectedItem.id === item.id) {
      setSelecteditem(blankCustomer);
      setFormObject(blankCustomer);
    } else {
      setSelecteditem(item);
      setFormObject(item);
    }
  };

  const handleInputChange = function (event) {
    log("in handleInputChange()");
  };

  let onCancelClick = function () {
    log("in onCancelClick()");
  };

  let onDeleteClick = function () {
    log("in onDeleteClick()");
  };

  let onSaveClick = function () {
    log("in onSaveClick()");
  };

  return (
    <div>
      <CustomerList
        customers={customersList}
        handleListClick={handleListClick}
        selected={selected}
      />
      <div className="boxed">
        <div>
          <h4>{mode}</h4>
        </div>
        <form>
          <table id="customer-add-update">
            <tbody>
              <tr>
                <td className={"label"}>Name:</td>
                <td>
                  <input
                    type="text"
                    name="name"
                    value={formObject.name}
                    placeholder="Customer Name"
                    required
                  />
                </td>
              </tr>
              <tr>
                <td className={"label"}>Email:</td>
                <td>
                  <input
                    type="email"
                    name="email"
                    value={formObject.email}
                    placeholder="name@company.com"
                  />
                </td>
              </tr>
              <tr>
                <td className={"label"}>Pass:</td>
                <td>
                  <input
                    type="text"
                    name="password"
                    value={formObject.password}
                    placeholder="password"
                  />
                </td>
              </tr>
              <tr className="button-bar">
                <td colSpan="2">
                  <input type="button" value="Delete" onClick={onDeleteClick} />
                  <input type="button" value="Save" onClick={onSaveClick} />
                  <input type="button" value="Cancel" onClick={onCancelClick} />
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );
}

export default App;
