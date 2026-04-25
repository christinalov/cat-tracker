import { useState, useEffect, useRef } from "react";
import TaskItem from "./components/TaskItem.jsx";
import AddTaskItemButton from "./components/AddTaskItemButton.jsx";
import AddTaskItemForm from "./components/AddTaskItemForm.jsx";

/**
 * need to do:
 * 1. hover over LI taskitem, tooltip displays how many days ago from today
 * 2. feature to add new taskitem AND to delete taskitem
 * 3. done : rearrange order LI taskitems and have order persist
 * 4. feature to remove all saved dates?
 * 5. import dates to google calendar
 * 6. combine taskList and taskdatedata into one single component?
 * 7. add drag and drop threshold lines
 * 8. learn css/improve the ui
 **/

const App = () => {
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
    return `Today's date: ${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()} (${dayNames[d.getDay()]})`;
  });

  const [showModal, setShowModal] = useState(false);

  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const onChange = (taskId, inputId, newValue) => {
    console.log("typing: ", newValue);
    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskId
          ? {
              ...task,
              inputs: task.inputs.map((input) =>
                input.id === inputId ? { ...input, value: newValue } : input,
              ),
            }
          : task,
      ),
    );
  };

  const onDrop = (targetIndex) => {
    const sourceIndex = movingTaskItemSourceIndex.current;
    const updatedTasks = [...tasks];
    const draggedTask = updatedTasks[sourceIndex];
    updatedTasks.splice(sourceIndex, 1);
    updatedTasks.splice(targetIndex, 0, draggedTask);
    setTasks(updatedTasks);
  };

  // Creating a new task item
  const onSubmit = (formData) => {
    console.log("tasks: ", tasks, Array.isArray(tasks));
    /** formData: obj
     *  {taskName: str,
     *  dateNeeded: "on"
     *  numberNeeded: null}
     */
    const newTask = {
      id: crypto.randomUUID(),
      label: formData["taskName"],
      inputs: [],
    };

    if (formData["numberNeeded"]) {
      newTask.inputs = [
        ...newTask.inputs,
        { id: crypto.randomUUID(), type: "number", value: null },
      ];
    }

    if (formData["dateNeeded"]) {
      console.log(newTask.inputs);
      newTask.inputs = [
        ...newTask.inputs,
        { id: crypto.randomUUID(), type: "date", value: null },
      ];
    }

    setTasks((prev) => [...prev, newTask]);
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <main>
      <p>{dateMsg}</p>
      <ul>
        {tasks.map((task, index) => (
          <TaskItem
            key={task.id}
            name={task.name}
            index={index}
            task={task}
            label={task.label}
            onChange={onChange}
            onDragStart={() => (movingTaskItemSourceIndex.current = index)}
            onDrop={() => onDrop(index)}
          />
        ))}
        <AddTaskItemButton
          disabled={showModal}
          onClick={() => setShowModal(true)}
        />
      </ul>
      {showModal && (
        <AddTaskItemForm
          onClose={() => setShowModal(false)}
          onSubmit={onSubmit}
        />
      )}
    </main>
  );
};

export default App;
