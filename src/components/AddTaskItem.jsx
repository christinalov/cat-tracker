import "./AddTaskItem.css";
import { IoAddCircleOutline } from "react-icons/io5";

const AddTaskItem = function () {
  return (
    <li className="add-task-item">
      <span className="add-button">
        <IoAddCircleOutline />
      </span>

      <label>Add New Task</label>
    </li>
  );
};

export default AddTaskItem;
