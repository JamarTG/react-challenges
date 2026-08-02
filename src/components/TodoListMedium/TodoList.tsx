import { useState } from "react";
import { nanoid } from "nanoid";


import "./TodoList.css";

interface Task {
  id: string;
  description: string;
}

const TodoList = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [task, setTask] = useState<Task>({
    id: nanoid(),
    description: "",
  });

  const addTask = () => {
    if (!task.description) return;

    setTasks([...tasks, task]);
    setTask({ id: nanoid(), description: "" });
  };

  const deleteTask = (id: string) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <label htmlFor="task"></label>
      <input
        type="text"
        name="task"
        placeholder="add a task"
        value={task?.description}
        onChange={(e) => setTask({ ...task, description: e.target.value })}
        id="task"
      />

      <button type="button" onClick={() => addTask()}>
        Submit
      </button>

      <ul>
        {tasks.map((task) => {
          return (
            <li className="task-container" key={task.id}>
              <p>{task.description}</p>
              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
