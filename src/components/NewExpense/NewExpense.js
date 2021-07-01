import React, { useState } from "react";
import "./NewExpense.css";
import Expenseform from "./Expenseform";
function NewExpense() {
  return (
    <div className="new-expense">
      <Expenseform></Expenseform>
    </div>
  );
}
export default NewExpense;
