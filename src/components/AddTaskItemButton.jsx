import "./AddTaskItemButton.css";
import { IoAddCircleOutline } from "react-icons/io5";

const AddTaskItemButton = ({ disabled, onClick }) => {
  return (
    <button
      disabled={disabled}
      type="button"
      className="add-button"
      onClick={onClick}
    >
      <IoAddCircleOutline />
      <span>Add New Task</span>
    </button>
  );
};

export default AddTaskItemButton;
