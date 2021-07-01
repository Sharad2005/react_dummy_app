import React, { useState } from "react";
import "./NewExpense.css";
function Expenseform() {
  const [enterdtitle, setEnterdtitle] = useState("");
  const [enterdprice, setEnterdprice] = useState("");
  const [enterddate, setEnterddate] = useState("");
  function TitleChangeHandler(event) {
    setEnterdtitle(event.target.value);
  }
  function PriceChangeHandler(event) {
    setEnterdprice(event.target.value);
  }
  function DateChangeHandler(event) {
    setEnterddate(event.target.value);
  }
  return (
    <div className="new-expense">
      <form>
        <div className="new-expense__controls">
          <div className="new-expense__control label">
            <label>Title</label>
            <input type="text" onChange={TitleChangeHandler} />
          </div>
        </div>
        <div className="new-expense__controls">
          <div className="new-expense__control label">
            <label>Price</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              onChange={PriceChangeHandler}
            />
          </div>
        </div>
        <div className="new-expense__controls">
          <div className="new-expense__control label ">
            <label>Date</label>
            <input type="date" onChange={DateChangeHandler} />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>`
        </div>
      </form>
    </div>
  );
}
export default Expenseform;
