import { getAll, post, put, deleteById } from "./memdb.js";

import "./App.css";
import React, { useState, useEffect } from "react";
import CustomerList from "./components/CustomerList.jsx";
import CustomerForm from "./components/CustomerForm.jsx";
function log(message) {
  console.log(message);
}

export function App(params) {
  let blankCustomer = { id: -1, name: "", email: "", password: "" };
  const [formObject, setFormObject] = useState({ blankCustomer });
  const [selectedItem, setSelecteditem] = useState({ blankCustomer });
  const [customersList, setCustomers] = useState([]);

  const getCustomers = function () {
    log("in getCustomers()");
    setCustomers(getAll());
  };

  const selected = function (item) {
    console.log(item.id === formObject.id);

    console.log(item.id !== selectedItem.id);

    if (item.id === formObject.id && formObject.id === selectedItem.id) {
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
    setFormObject(blankCustomer);
    log("in onCancelClick()");
  };

  let onDeleteClick = function () {
    log("in onDeleteClick()");
  };

  let onSaveClick = function () {
    log("in onSaveClick()");
  };

  useEffect(() => {
    getCustomers();
  }, []);

  return (
    <div>
      <CustomerList
        customers={customersList}
        handleListClick={handleListClick}
        selected={selected}
      />
      <CustomerForm
        formObject={formObject}
        onCancelClick={onCancelClick}
        onDeleteClick={onDeleteClick}
        onSaveClick={onSaveClick}
      />
    </div>
  );
}

export default App;
