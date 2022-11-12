import React from "react";
import Expense from "./components/Expenses/Expense.js";
import NewExpense from "./components/NewExpense/NewExpense.js";

const App = function () {
  let expenses = [
    {
      date: new Date(2021, 4, 28),
      title: "Car Insurance",
      price: "200",
    },
    {
      date: new Date(2019, 5, 19),
      title: "School Fee",
      price: "500",
    },
    {
      date: new Date(2021, 6, 8),
      title: "Party",
      price: "800",
    },
    {
      date: new Date(2022, 9, 10),
      title: "Entertainment",
      price: "700",
    },
  ];

  return (
    <div>
      <NewExpense />
      <Expense item={expenses} />
    </div>
  );
};
export default App;
