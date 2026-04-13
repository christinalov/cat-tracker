import { useState, useEffect, useRef } from "react";
import TaskItem from "./components/TaskItem.jsx";
import { tasks } from "./data/tasks.js";

/**
 * need to do:
 * 1. hover over LI taskitem, tooltip displays how many days ago from today
 * 2. feature to add new taskitem
 * 3. rearrange order LI taskitems and have order persist
 **/

function App() {
  const [dateMsg] = useState(() => {
    const dayNames = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    const d = new Date();
    return `Today is ${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()} (${dayNames[d.getDay()]}) !!`;
  });

  const [tasksList] = useState(tasks);

  const movingTaskItemSourceIndex = useRef(null);

  const [tasksData, setTasksData] = useState(() => {
    const savedData = localStorage.getItem("tasksDateData");
    return savedData ? JSON.parse(savedData) : {};
  });

  const onChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    setTasksData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // keep track
  const onDrop = () => {};

  useEffect(() => {
    localStorage.setItem("tasksDateData", JSON.stringify(tasksData));
  }, [tasksData]);

  return (
    <main>
      <p>{dateMsg}</p>
      <ul>
        {tasksList.map((task, index) => (
          <TaskItem
            key={task.name}
            name={task.name}
            index={index}
            label={task.label}
            type={task.type}
            value={tasksData[task.name]}
            onChange={onChange}
            numberNeeded={task.numberNeeded}
            numberName={task.numberName}
            numberValue={task.numberNeeded ? tasksData[task.numberName] : ""}
            onDragStart={() => (movingTaskItemSourceIndex.current = index)}
            onDragOver={(e) => e.preventDefault()}
            onDrop={onDrop}
          />
        ))}
      </ul>
    </main>
  );
}

export default App;
