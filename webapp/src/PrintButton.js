import React from 'react';

function PrintButton() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <button onClick={handlePrint} class="button-main">Print Check</button>
  );
}

export default PrintButton;