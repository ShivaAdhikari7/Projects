import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate.js";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const [newTitle, setNewTitle] = useState("");
  const [title, setTitle] = useState(props.title);

  const onChangeHandler = (e) => {
    setNewTitle(e.target.value);
  };

  const onClickHandler = () => {
    setTitle(newTitle);
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />

      <div className="expense-item_description">
        <div>{title}</div>
        <div className="expense-item_price">${props.price}</div>
      </div>
      <input type="text" name="" value={newTitle} onChange={onChangeHandler} />
      <button onClick={onClickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
