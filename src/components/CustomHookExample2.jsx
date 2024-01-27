import React from "react";
import useLocalStorage from "./hooks/useLocalStorage";

function CustomHookExample2() {
  const [task, setTask] = useLocalStorage("task", "");
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  console.log(tasks);

  const onSubmit = (e) => {
    e.preventDefault();

    const taskObj = {
      task,
      completed: false,
      date: Math.floor(Math.random() * 100000),
    };

    setTasks([...tasks, taskObj]);
    console.log(tasks);
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <div className='mb-3'>
          <label htmlFor='Task' className='form-label'>
            Task
          </label>
          <input
            className='input'
            type='text'
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </div>
        <button className='btn btn-primary'>Submit</button>
      </form>

      <hr />
      {tasks.map((task) => (
        <h3 key={task.date}>{task.task}</h3>
      ))}
    </>
  );
}

export default CustomHookExample2;
