import "./TaskItem.css";

const TaskItem = function ({
  label,
  name,
  value,
  onChange,
  type,
  numberNeeded,
  numberName,
  numberValue,
}) {
  return (
    <li className="task-item">
      <label>{label}</label>
      {numberNeeded && (
        <input
          type="number"
          name={numberName}
          value={numberValue}
          onChange={onChange}
        />
      )}

      {type === "date" && (
        <input type="date" name={name} value={value} onChange={onChange} />
      )}
    </li>
  );
};

export default TaskItem;
