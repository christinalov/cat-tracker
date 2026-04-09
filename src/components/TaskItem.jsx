import "./TaskItem.css";

function TaskItem({ label, name, value, onChange, type, numberNeeded }) {
  return (
    <li className="task-item">
      <label>{label}</label>
      {type === "date" && (
        <input type="date" name={name} value={value} onChange={onChange} />
      )}

      {numberNeeded && (
        <input type="number" name={name} value={value} onChange={onChange} />
      )}
    </li>
  );
}

export default TaskItem;
