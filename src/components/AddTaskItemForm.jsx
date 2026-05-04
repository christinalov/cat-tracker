import "./AddTaskItemForm.css";
import { IoIosClose } from "react-icons/io";
import { useState } from "react";

const AddTaskItemForm = ({ onClose, onSubmit }) => {
  const [label, setLabel] = useState("");
  const [type, setType] = useState("date");
  const [dateNeeded, setDateNeeded] = useState(false);
  const [numberNeeded, setNumberNeeded] = useState(false);

  const handleSubmit = (formData) => {
    const taskName = formData.get("taskName");
    const dateNeeded = formData.get("dateNeeded");
    const numberNeeded = formData.get("numberNeeded");

    onSubmit({ taskName, dateNeeded, numberNeeded });

    onClose();
  };

  return (
    <div className="modal">
      <button className="close-button" onClick={onClose}>
        <IoIosClose />
      </button>

      <form action={handleSubmit}>
        <div className="modal-content">
          <input
            name="taskName"
            placeholder="Task name"
            value={label}
            onChange={(e) => setLabel(e.target.value)}
          />

          <div className="task-types">
            <label>
              <input
                name="dateNeeded"
                type="checkbox"
                checked={dateNeeded}
                onChange={(e) => setDateNeeded(e.target.checked)}
              />
              Date?
            </label>

            <label>
              <input
                name="numberNeeded"
                type="checkbox"
                checked={numberNeeded}
                onChange={(e) => setNumberNeeded(e.target.checked)}
              />
              Number?
            </label>
          </div>

          <button type="submit" className="create-button">
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTaskItemForm;
