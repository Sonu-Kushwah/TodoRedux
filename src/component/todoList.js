import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, remove } from "../Action/action";
function TodoList() {
  const [inputData, setData] = useState("");
  const list = useSelector((state) => state.todoReducer.list);
  const dispatch = useDispatch();
  return (
    <>
      <h3>TodoList Redux Project</h3>
      <input
        type="text"
        value={inputData}
        onChange={(e) => setData(e.target.value)}
      />
      <button onClick={() => dispatch(addTodo(inputData), setData(""))}>
        Add
      </button>
      <ul>
        {list.map((item, index) => {
          return (
            <div key={item.id}>
              <li>
                {item.data}
                <i className="fa-sharp fa-solid fa-circle-xmark" onClick={() => {
                  dispatch(deleteTodo(item.id));
                }}></i>
                
              </li>
            </div>
          );
        })}
      </ul>
      <button onClick={()=>dispatch(remove())}>Clear All</button>
    </>
  );
}

export default TodoList;
