import React from 'react'
import Table from 'react-bootstrap/Table';


const AdminPannel = () => {
  return (

    <Table responsive >
      <thead>
        <tr>
          <th>Sr No</th>
          <th>Name</th>
          <th>Mobile No</th>
          <th>Address</th>
          <th>City</th>
          <th>Size</th>
          <th>Payment Photo</th>
          <th>Payment Done</th>
          <th>Order Date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>John Doe</td>
          <td>123-456-7890</td>
          <td>123 Main St</td>
          <td>New York</td>
          <td>M</td>
          <td><img src="payment-photo-url" alt="Payment" /></td>
          <td>Yes</td>
          <td>2024-08-09</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jane Smith</td>
          <td>987-654-3210</td>
          <td>456 Elm St</td>
          <td>Los Angeles</td>
          <td>L</td>
          <td><img src="payment-photo-url" alt="Payment" /></td>
          <td>No</td>
          <td>2024-08-09</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Sam Brown</td>
          <td>555-555-5555</td>
          <td>789 Oak St</td>
          <td>Chicago</td>
          <td>S</td>
          <td><img src="payment-photo-url" alt="Payment" /></td>
          <td>Yes</td>
          <td>2024-08-09</td>
        </tr>
      </tbody>
    </Table>
    

  )
}

export default AdminPannel
