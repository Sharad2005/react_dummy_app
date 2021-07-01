import React, { useState } from "react";
import "./Expense.css";
import ExpenseDate from "./ExpenseDate";
function ExpenceItems(props) {
  const [Title, setTitle] = useState(props.title);
  function ChangeTitle() {
    setTitle(prompt("Please enter the new title"));
  }
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{Title}</h2>
      </div>
      <div className="expense-item__price">&#x20B9;{props.amount}</div>
      <button
        className="expense-item__price expense-item__btn"
        onClick={ChangeTitle}
      >
        Change Title
      </button>
    </div>
  );
}
export default ExpenceItems;
