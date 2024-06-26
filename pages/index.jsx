import React, { useState, useEffect } from "react";
import ListItems from "../components/listItems";
import { saveAndGetTasks, addItems } from "../components/useTasksHook";

export default function Home() {
  const [task, addTask] = useState([]);
  const [text, setText] = useState("");

  const addItems = () => {
    text && addTask([...task, text]);
    setText("");
  };

  saveAndGetTasks(addTask, task);

  return (
    <>
      <div className="h-screen" style={{ background: "#563d6e" }}>
        <div className="text-center pt-20 ">
          <h2 className="text-white text-3xl">Data Keeper</h2>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Add Item..."
            className="md:w-1/4 w-3/4 border px-4 mt-8 py-2 rounded-md text-lg outline-none "
            required
          />
          <button
            className="bg-white relative right-7 cursor-pointer outline-none text-2xl"
            onClick={addItems}
          >
            +
          </button>
          <div className={`${task.length > 0 ? "block mt-10" : "hidden"} `}>
            <ListItems
              task={task}
              addTask={addTask}
              text={text}
              setText={setText}
            />

            <button
              className="mt-10 hover:bg-blue-500 bg-white px-10 hover:text-white transition-all text-base  py-2 uppercase outline-white"
              onClick={() => {
                addTask([]);
              }}
            >
              Clear All
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
