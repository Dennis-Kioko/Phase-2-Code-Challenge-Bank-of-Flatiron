import React from 'react'

const DataItem = ({ date, description, category, amount }) => {
  // Display a row in the table for a single transaction
  return (
    <tr>
      <td>{date}</td> 
      <td>{description}</td>
      <td>{category}</td> 
      <td>{amount}</td> 
    </tr>
  )
}

export default DataItem

