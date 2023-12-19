import React from 'react';

function Check({ payee, amount, date }) {
  return (
    /*<div className="check">
      <h2>Check Details:</h2>
      <p>Payee: {payee}</p>
      <p>Amount: {amount}</p>
      <p>Date: {date}</p>
    </div>*/
    /*<div>
      <img src="/public/chck.png" alt="Check Template" />
      {// Add other components and details over the image }
    </div>  */
    <div style={{ position: 'relative' }}>
    <img src={window.location.origin + '/public/chck.png'} alt="Check Template" />
        <div
        style={{
            position: 'absolute',
            top: '100px',  // Adjust the position as needed
            left: '200px',
        }}
        >
        <p>Pay: {payee}</p>
        <p>Rupees: {amount}</p>
        <p>Date: {date}</p>
        {/* Add other information */}
        </div>
    </div>
  );
}

export default Check;