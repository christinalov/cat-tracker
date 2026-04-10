import { useState, useEffect } from "react";
import TaskItem from "./components/TaskItem.jsx";
import { tasks } from "./data/tasks.js";

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
    return `Today is ${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()} (${dayNames[d.getDay()]})!!`;
  });

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

  useEffect(() => {
    localStorage.setItem("tasksDateData", JSON.stringify(tasksData));
  }, [tasksData]);

  return (
    <main>
      <p>{dateMsg}</p>
      <ul>
        {tasks.map((task) => (
          <TaskItem
            key={task.name}
            name={task.name}
            label={task.label}
            type={task.type}
            value={tasksData[task.name]}
            onChange={onChange}
            numberNeeded={task.numberNeeded}
            numberName={task.numberName}
            numberValue={task.numberNeeded ? tasksData[task.numberName] : ""}
          />
        ))}
      </ul>
    </main>
  );
}

export default App;
