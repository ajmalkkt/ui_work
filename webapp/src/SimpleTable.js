import React from 'react';
import './STable.css';

function SimpleTable() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Order Management System</h1>
      </header>
      <main>
        <table className="data-table">
          <thead>
            <tr>
              <th>Column 1</th>
              <th>Column 2</th>
              <th>Column 3</th>
              <th>Column 4</th>
              <th>Column 5</th>
              <th>Column 6</th>
              <th>Column 7</th>
              <th>Column 8</th>
            </tr>
          </thead>
          <tbody>
            {/* Your table data goes here */}
          </tbody>
        </table>
      </main>
    </div>
  );
}

export default SimpleTable;