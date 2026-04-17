import "./AddTaskItemForm.css";

const AddTaskItemForm = ({ onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h3> Create New Task </h3>

        <input placeholder="Task name" />
        <button onClick={onClose}> Close </button>
        {/* <label>
        <input type="checkbox" />
      </label> */}
      </div>
    </div>
  );
};

export default AddTaskItemForm;
