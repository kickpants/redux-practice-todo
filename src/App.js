import "./App.css";
import { useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import { addToList } from "./store/actions/manageList";
import Todo from "./components/Todo";

function App() {
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    console.log(message);
    dispatch(addToList(message));
    e.preventDefault();
  };

  useEffect(() => {
    //setListContent(toDoList && toDoList.map((item) => <li>{item}</li>));
  });

  return (
    <div>
      test
      <div>
        <input type="text" value={message} onChange={handleChange} />
      </div>
      <button onClick={handleSubmit}>Submit</button>
      <Todo />
    </div>
  );
}

export default App;
