import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { getAllDataInTable } from '../services/registration';
import { countDataOfTable } from '../services/registration';

const AdminPannel = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [shirtSize, setShirtSize] = useState('');
  const [size, setSize] = useState(10);
  const [page, setPage] = useState(0);
  const [orderCount, setOrderCount] = useState(0);

  useEffect(() => {
    setLoading(true);
    getAllDataInTable({ size, page, shirtSize })
      .then((response) => {
        console.log(response.data); // Log the response data for debugging
        setOrders(Array.isArray(response.data.body) ? response.data.body : []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });

      countDataOfTable({ shirtSize }) // Fetch the order count based on shirt size
      .then((response) => {
        setOrderCount(response.data.body); // Assuming response.data.count contains the count value
      })
      .catch((error) => {
        console.error("Error fetching count:", error);
        setOrderCount(0); // Handle error by setting count to 0
      });

  }, [size, page, shirtSize]);

  const handleSizeChange = (event) => {
    setShirtSize(event.target.value);
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
     <div  style={{display:"flex", justifyContent:"space-between", alignItems:"center" ,marginBottom:"20px"}}>
      <div>
     <label htmlFor="shirtSize"><b>Select Shirt Size:</b> </label> 

      <select id="shirtSize" value={shirtSize} onChange={handleSizeChange}>
        <option value="">All Sizes</option>
        <option value="20">20</option>
        <option value="22">22</option>
        <option value="24">24</option>
        <option value="26">26</option>
        <option value="28">28</option>
        <option value="30">30</option>
        <option value="32">32</option>
        <option value="34">34</option>
        <option value="36">36</option>
        <option value="38">38</option>
        <option value="40">40</option>
        <option value="42">42</option>
        <option value="44">44</option>
        <option value="46">46</option>
        <option value="48">48</option>
      </select>
      </div>

      <div   style={{
          width: '80px',
          height: '50px',
          borderRadius: '50%',
          backgroundColor: 'black',
          color: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '16px',
       marginRight:"10%"
        }}
      >
        {orderCount}</div>
     </div>
      

      

      <Table responsive>
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
          {orders.length > 0 ? (
            orders.map((order, index) => (
              <tr key={order.orderId}>
                <td>{index + 1 + page * size}</td>
                <td>{order.name}</td>
                <td>{order.mobileNo || 'N/A'}</td>
                <td>{order.address}</td>
                <td>{order.city || 'N/A'}</td>
                <td>{order.size || 'N/A'}</td>
                <td>
                  <img src={order.paymentPhotoUrl || 'placeholder.png'} alt="Payment" style={{ width: '50px', height: '50px' }} />
                </td>
                <td>{order.paymentDone}</td>
                <td>{order.orderDate}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="9">No orders available</td>
            </tr>
          )}
        </tbody>
      </Table>

      <div>
        <button onClick={() => handlePageChange(page - 1)} disabled={page === 0}>
          Previous
        </button>
        <span> Page {page + 1} </span>
        <button onClick={() => handlePageChange(page + 1)}>
          Next
        </button>
      </div>

      
    </div>
  );
};

export default AdminPannel;
