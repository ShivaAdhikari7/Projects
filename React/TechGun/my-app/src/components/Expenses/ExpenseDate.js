import React from "react";
import "./ExpenseDate.css";

const ExpenseDate = function (props) {
  const month = props.date.toLocaleString("us-en", { month: "long" });
  const year = props.date.getFullYear();
  const day = props.date.toLocaleString("us-en", { day: "2-digit" });

  return (
    <div className="expense-date">
      <div className="expense-date_month">{month}</div>
      <div className="expense-date-year">{year}</div>
      <div className="expense-date_day">{day}</div>
    </div>
  );
};

export default ExpenseDate;
