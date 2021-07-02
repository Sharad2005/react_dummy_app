import React, { useState } from "react";
import "./NewExpense.css";
import Expenseform from "./Expenseform";
function NewExpense(props) {
function saveExpenseDataHandler(eneterdExpenseData){
const ExpenseData={
  ...eneterdExpenseData,
  id: Math.random().toString()
};
props.onsaveexpensedata(ExpenseData)
}
  return (
    <div className="new-expense">
      <Expenseform onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
  );
}
export default NewExpense;
