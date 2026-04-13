import "./TaskItem.css";

const TaskItem = function ({
  label,
  name,
  index,
  value,
  onChange,
  type,
  numberNeeded,
  numberName,
  numberValue,
  onDragStart,
  onDragEnter,
  onDragOver,
  onDrop,
}) {
  return (
    <li
      className="task-item"
      draggable="true"
      index={index}
      onDragStart={onDragStart}
      onDragEnter={onDragEnter}
      onDragOver={onDragOver}
      onDrop={onDrop}
    >
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
