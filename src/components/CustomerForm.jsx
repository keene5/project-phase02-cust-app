import React from 'react'

function CustomerForm({formObject, onDeleteClick, onSaveClick, onCancelClick }) {
  let mode = formObject.id >= 0 ? "Update" : "Add";
  return (
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
  )
}

export default CustomerForm
