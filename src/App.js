import axios from "axios";
import React, { useState, useEffect } from "react";
import CustomerList from "./components/CustomerList.jsx";
import CustomerForm from "./components/CustomerForm.jsx";
import "./App.css";
import { validateEmail, validatePassword, determineErrors } from "./validate.js";




import { isUnsanitaryInput } from "./sanitize.js";

function log(message) {
  console.log(message);
}

export function App(params) {
  let blankCustomer = { id: -1, name: "", email: "", password: "" };
  const [formObject, setFormObject] = useState(blankCustomer);
  const [selectedItem, setSelecteditem] = useState(blankCustomer);
  const [customersList, setCustomers] = useState([]);
  const [errors, setErrors] = useState({ name: "", email: "", password: "" });
  let mode = formObject.id >= 0 ? "Update" : "Add";

  const getCustomers = async () => {
    log("in getCustomers()");
    try {
      const response = await axios.get("/api/data"); // No need to include 'http://localhost:4000' if using proxy
      setCustomers(response.data);
    } catch (error) {
      console.error("Error fetching customers:", error);
    }
  };

  const selected = function (item) {
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
    setErrors({ name: "", email: "", password: "" });
    const name = event.target.name;
    const value = event.target.value;
    let newFormObject = { ...formObject };
    newFormObject[name] = value;
    setFormObject(newFormObject);
  };

  let onCancelClick = function () {
    setErrors({ name: "", email: "", password: "" });
    setFormObject(blankCustomer);
    log("in onCancelClick()");
  };

  let onDeleteClick = async function () {
    log("in onDeleteClick()");
    setErrors({ name: "", email: "", password: "" });
    if (formObject.id >= 0) {
      try {
        await axios.delete(`/api/data/${formObject.id}`); // No need to include 'http://localhost:4000' if using proxy
        getCustomers(); // Refresh the customer list
      } catch (error) {
        console.error("Error deleting customer:", error);
      }
    }
    setFormObject(blankCustomer);
  };

  let onSaveClick = async function () {
    setErrors({ name: "", email: "", password: "" });

    let { hasErrors, newErrors } = determineErrors(errors, formObject);

    if (hasErrors) {
      setErrors(newErrors);
      return;
    }

    try {
      if (mode === "Add") {
        await axios.post("/api/data", formObject); // No need to include 'http://localhost:4000' if using proxy
      } else if (mode === "Update") {
        await axios.put(`/api/data/${formObject.id}`, formObject); // No need to include 'http://localhost:4000' if using proxy
      }
      getCustomers(); // Refresh the customer list
    } catch (error) {
      console.error("Error saving customer:", error);
    }
    setFormObject(blankCustomer);
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
        handleInputChange={handleInputChange}
        mode={mode}
        errors={errors}
      />
    </div>
  );
}

export default App;

