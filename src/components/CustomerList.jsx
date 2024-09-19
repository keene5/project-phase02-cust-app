import React from 'react'
import '../App.css';

function CustomerList({customers, handleListClick, selected}) {
  return (
      <div className="boxed">
        <h4>Customer List</h4>
        <table id="customer-list">
          <thead>
            <tr className='left-aligned'>
              <th className='left-aligned'>Name</th>
              <th className='left-aligned'>Email</th>
              <th className='left-aligned'>Pass</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((item, index) => {
              return (
                <tr
                  key={item.id}
                  onClick={() => handleListClick(item)}
                  className={selected(item)}
                >
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.password}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
  )
}

export default CustomerList
