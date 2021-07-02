import React, { useState } from "react";
import "./NewExpense.css";
function Expenseform(props) {
  const [enterdtitle, setEnterdtitle] = useState("");
  const [enterdamount, setEnterdamount] = useState("");
  const [enterddate, setEnterddate] = useState("");
  function TitleChangeHandler(event) {
    setEnterdtitle(event.target.value);
  }
  function amountChangeHandler(event) {
    setEnterdamount(event.target.value);
  }
  function DateChangeHandler(event) {
    setEnterddate(event.target.value);
  }
  function submitHandler(event) {
    event.preventDefault();
    const ExpenseData = {
      title: enterdtitle,
      amount: enterdamount,
      date: new Date(enterddate),
    };
    props.onSaveExpenseData(ExpenseData);
    setEnterdtitle("");
    setEnterdamount("");
    setEnterddate("");
  }
  return (
    <div className="new-expense">
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control label">
            <label>Title</label>
            <input type="text" value={enterdtitle} onChange={TitleChangeHandler} />
          </div>
        </div>
        <div className="new-expense__controls">
          <div className="new-expense__control label">
            <label>Price</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={enterdamount}
              onChange={amountChangeHandler}
            />
          </div>
        </div>
        <div className="new-expense__controls">
          <div className="new-expense__control label ">
            <label>Date</label>
            <input type="date" value={enterddate} onChange={DateChangeHandler} />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
}
export default Expenseform;
