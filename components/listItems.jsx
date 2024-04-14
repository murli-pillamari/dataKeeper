import React from "react";

export default function ListItems(props) {
  const { task, addTask, setText } = props;

  const deleteItems = (index) => {
    const updatedItems = task.filter((item, ind) => {
      return ind !== index;
    });
    addTask(updatedItems);
  };

  const editData = (index) => {
    const editData = task.find((items, ind) => {
      if (ind === index) {
        return items;
      }
    });
    setText(editData);
    const updatedItems = task.filter((item, ind) => {
      return ind !== index;
    });
    addTask(updatedItems);
  };

  return (
    <>
      <div className="-ml-3">
        {task.map((items, index) => {
          return (
            <div
              key={index}
              className="flex md:w-1/4 w-3/4 mx-auto justify-between bg-blue-500 hover:bg-white text-white hover:text-black mt-6 rounded-md"
            >
              <button
                className="w-full mx-auto  transition-all font-thin text-left  px-4 py-2 text-lg outline-none cursor-pointer"
                title="Edit"
                onClick={() => {
                  editData(index);
                }}
              >
                {/* <span className="pr-4 border-r-2">{index + 1}</span>&nbsp;&nbsp; */}
                {items}
              </button>
              <button
                className=" px-4 py-2 rounded-md cursor-pointer outline-none text-2xl"
                title="Delete"
                onClick={(e) => deleteItems(index)}
              >
                -
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}
