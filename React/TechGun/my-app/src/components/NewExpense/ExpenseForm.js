import "./ExpenseForm.css";
import React, { useState } from "react";

const ExpenseForm = () => {
  const [enteredTitle, setNewTitle] = useState("");
  const [enteredAmount, setNewAmount] = useState("");
  const [enteredDate, setNewDate] = useState("");

  const changeTitleHandler = (e) => {
    setNewTitle(e.target.value);
  };
  const changeAmountHandler = (e) => {
    setNewAmount(e.target.value);
  };
  const changeDateHandler = (e) => {
    setNewDate(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const expenses = {
      title: enteredTitle,
      price: enteredAmount,
      date: new Date(enteredDate),
    };
    console.log(expenses);

    setNewTitle("");
    setNewDate("");
    setNewAmount("");
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={changeTitleHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={changeAmountHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" value={enteredDate} onChange={changeDateHandler} />
        </div>
      </div>
      <div className="new-expense__action">
        <button type="submit">Add Expense </button>
      </div>
    </form>
  );
};
export default ExpenseForm;
