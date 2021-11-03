import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const Todo = (props) => {
  const element = useSelector((state) => {
    let elementList = [];
    for (const key in state.todo.items) {
      elementList.push({
        id: state.todo.items[key].id,
        message: state.todo.items[key].message,
      });
    }
    return elementList;
  });


  return (
    <div>
      <ul>
        <li>this is my first point</li>
        <li>this is my second point</li>
        {element.map((item) => <li>{item.message}</li>)}
      </ul>
    </div>
  );
};

export default Todo;
