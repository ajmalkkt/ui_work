import React, { useState } from 'react';

function CheckForm({ onCheckSubmit }) {
  const [payee, setPayee] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onCheckSubmit({ payee, amount, date });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Payee"
        value={payee}
        onChange={(e) => setPayee(e.target.value)}
      />
      <input
        type="text"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        type="text"
        placeholder="Date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button type="submit" class="button-main">Submit</button>
    </form>
  );
}

export default CheckForm;