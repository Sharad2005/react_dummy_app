import React, { useState } from "react";
import "./NewExpense.css";
import Expenseform from "./Expenseform";
function NewExpense(props) {
  
  const[NoFormSubmit, FormSubmit]=useState(false);
  function saveExpenseDataHandler(eneterdExpenseData) {
    const ExpenseData = {
      ...eneterdExpenseData,
      id: Math.random().toString(),
    };
    props.onsaveexpensedata(ExpenseData);
  }
  function ShowForm(){
FormSubmit(true);
  };
  function stopShowForm(){
    FormSubmit(false)
  }
  return (
    <div className="new-expense">
      {!NoFormSubmit&& <button onClick={ShowForm}>Add New Expense</button>}
      {NoFormSubmit&&<Expenseform onSaveExpenseData={saveExpenseDataHandler} oncancle={stopShowForm}/>}
    </div>
  );
}
export default NewExpense;
