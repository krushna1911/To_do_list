import React from "react";

function ToDoLists(props) {
  return (
    <>
      <div className="todo_style">
        <i
          className="fa fa-times"
          arian-hidden="true"
          onClick={() => props.onSelect(props.id)}
        />
        <li>{props.text}</li>
      </div>
    </>
  );
}

export default ToDoLists;
