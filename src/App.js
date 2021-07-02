import "./components/Expensoutput/Expense.css"
import React, { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expense from "./components/Expensoutput/Expense";
import ExpenseDate from "./components/Expensoutput/ExpenseDate";
import { from } from "pumpify";
const dammy_Expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
function App() {
  const[expenses, setExpenses]=useState(dammy_Expenses)
  function addnewexpensedata(expense){
    setExpenses(
      function (prevExpenses){
        return [expense, ...prevExpenses]
      }
    );
};
  return (
    <div>
      <NewExpense onsaveexpensedata={addnewexpensedata} />
      <Expense items={expenses} />
    </div>
  );
}

export default App;
