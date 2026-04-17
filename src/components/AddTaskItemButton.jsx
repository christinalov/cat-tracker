import "./AddTaskItemButton.css";
import { IoAddCircleOutline } from "react-icons/io5";

const AddTaskItemButton = ({ onClick }) => {
  return (
    <button type="button" className="add-button" onClick={onClick}>
      <IoAddCircleOutline />
      <span>Add New Task</span>
    </button>
  );
};

export default AddTaskItemButton;
