// TableBody.js
// To load data from a service with an auto-refresh feature, you can use React's 
// useEffect hook to fetch data from an API and update the component state at regular 
// intervals. Here's an example using the fetch function
import React, { useState, useEffect } from 'react';
//import React from 'react';
import './CTable.css';

const TableBody = () => {
  // Replace this with your data
//   const tableData = [
//     {name:"Amazon",ticker:"AMZN",side:"BUY",type:"MARKET",quantity:100,price:100,breach:false,exchange:"ASX",total:100},
//     {name:"Amazon",ticker:"AMZN",side:"BUY",type:"MARKET",quantity:100,price:100,breach:false,exchange:"ASX",total:100},
//     {name:"Amazon",ticker:"AMZN",side:"BUY",type:"MARKET",quantity:100,price:100,breach:false,exchange:"ASX",total:100},
//     {name:"Amazon",ticker:"AMZN",side:"BUY",type:"MARKET",quantity:100,price:100,breach:false,exchange:"ASX",total:100},
//     {name:"Amazon",ticker:"AMZN",side:"BUY",type:"MARKET",quantity:100,price:100,breach:false,exchange:"ASX",total:100},
//     {name:"Amazon",ticker:"AMZN",side:"BUY",type:"MARKET",quantity:100,price:100,breach:false,exchange:"ASX",total:100},
//     {name:"Amazon",ticker:"AMZN",side:"BUY",type:"MARKET",quantity:100,price:100,breach:false,exchange:"ASX",total:100},
//     {name:"Amazon",ticker:"AMZN",side:"BUY",type:"MARKET",quantity:100,price:100,breach:false,exchange:"ASX",total:100}
//   ];

 const [tableData, setTableData] = useState([]);
  
 const updatedTableData = tableData.map((row) => ({
    ...row,
    total: row.quantity * row.price,
  }));

  

  const fetchData = async () => {
    try {
      // Replace  with the actual API endpoint
      const response = await fetch('http://localhost:8080/order');
      const data = await response.json();
      setTableData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    // Fetch data initially
    fetchData();

    // Set up auto-refresh every 60 seconds (adjust as needed)
    const intervalId = setInterval(fetchData, 60000);

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <div className="table-container">
      <table className="data-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Ticker</th>
            <th>Buy/Sell</th>
            <th>Order Type</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Exchange</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {updatedTableData.map((row, index) => (
            <tr key={index}>
              <td>{row.name}</td>
              <td>{row.ticker}</td>
              <td>{row.side}</td>
              <td>{row.type}</td>
              <td>{row.quantity}</td>
              <td>{row.price}</td>
              <td>{row.exchange}</td>
              <td>{row.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableBody;
