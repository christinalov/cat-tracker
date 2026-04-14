import { useState, useEffect, useRef } from "react";
import TaskItem from "./components/TaskItem.jsx";
import AddTaskItem from "./components/AddTaskItem.jsx";
import { tasks as defaultTasks } from "./data/tasks.js";

/**
 * need to do:
 * 1. hover over LI taskitem, tooltip displays how many days ago from today
 * 2. feature to add new taskitem AND to delete taskitem
 * 3. done : rearrange order LI taskitems and have order persist
 * 4. feature to remove all saved dates?
 * 5. import dates to google calendar
 * 6. combine taskList and taskdatedata into one single component?
 * 7. add drag and drop threshold lines
 **/

const App = function () {
  const movingTaskItemSourceIndex = useRef(null);
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

  const [tasksList, setTasksList] = useState(() => {
    const savedOrder = localStorage.getItem("tasksOrderData");
    return savedOrder ? JSON.parse(savedOrder) : defaultTasks;
  });

  const [tasksData, setTasksData] = useState(() => {
    const savedData = localStorage.getItem("tasksDateData");
    return savedData ? JSON.parse(savedData) : {};
  });

  // const addTask = () => {
  //   const newTask = {
  //     id: crypto.randomUUID(),
  //     label: "Label"
  //   }
  // };

  const onChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    setTasksData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onDrop = (targetIndex) => {
    const sourceIndex = movingTaskItemSourceIndex.current;
    const updatedTasks = [...tasksList];
    const draggedTask = updatedTasks[sourceIndex];
    updatedTasks.splice(sourceIndex, 1);
    updatedTasks.splice(targetIndex, 0, draggedTask);
    setTasksList(updatedTasks);
  };

  const onClick = () => {
    console.log("clicking");
  };

  useEffect(() => {
    localStorage.setItem("tasksDateData", JSON.stringify(tasksData));
  }, [tasksData]);

  useEffect(() => {
    localStorage.setItem("tasksOrderData", JSON.stringify(tasksList));
  }, [tasksList]);

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
            onDrop={() => onDrop(index)}
          />
        ))}
        <div onClick={onClick}>
          <AddTaskItem />
        </div>
      </ul>
    </main>
  );
};

export default App;
