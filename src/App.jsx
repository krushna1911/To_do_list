import React, { useState } from "react";
import ToDoLists from "./ToDoLists";

function App() {
  const [cur, upd] = useState("");
  const [Items, setItems] = useState([]);
  const itemEvent = (x) => {
    upd(x.target.value);
  };

  const listOfItems = () => {
    setItems(() => {
      return [...Items, cur];
    });
    upd("");
  };

  const deleteItems = (id) => {
    setItems((Items) => {
      return Items.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <h1>ToDo List</h1>
          <input
            type="text"
            placeholder="add an item"
            value={cur}
            onChange={itemEvent}
          />
          <button onClick={listOfItems}>+</button>
          <ol className="toDoItems">
            {/*<li>{cur}</li>*/}
            {Items.map((itemVal, index) => {
              return (
                <ToDoLists
                  key={index}
                  id={index}
                  text={itemVal}
                  onSelect={deleteItems}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
