import "./AddTaskItemForm.css";
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
      <form action={handleSubmit}>
        <input
          name="taskName"
          placeholder="Task name"
          value={label}
          onChange={(e) => setLabel(e.target.value)}
        />

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

        <button type="submit">Create</button>
      </form>

      <button onClick={onClose}> Close </button>
    </div>
  );
};

export default AddTaskItemForm;
