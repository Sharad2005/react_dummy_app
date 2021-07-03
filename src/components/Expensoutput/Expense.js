import React, { useState } from "react";
import ExpenseFilter from "../Expensefilter/ExpenseFilter";
import ExpenceItems from "./ExpenseItems";
import Expenseschart from "./Expenseschart";
function Expense(props) {
  const [filteredYear, setFilterdYear] = useState("2020");
  function FilterChangeHandler(selectedYear) {
    setFilterdYear(selectedYear);
  }
  const filteredexpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onEnteringtheyear={FilterChangeHandler}
      />
            <Expenseschart expenses={filteredexpenses}/>

      {filteredexpenses.length === 0 ? (
        <p className="NoExpensesFound">No Expense found.</p>
      ) : (
        filteredexpenses.map((expense) => (
          <ExpenceItems
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
      )}
    </div>
  );
}
export default Expense;
