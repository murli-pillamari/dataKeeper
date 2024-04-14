import { useEffect } from "react";

export function saveAndGetTasks(addTask, task) {
  useEffect(() => {
    const getCache = JSON.parse(localStorage.getItem("tasks")) || "[]";
    if (getCache) {
      addTask((prevTask) => [...prevTask, ...getCache]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(task));
  }, [task]);
}
