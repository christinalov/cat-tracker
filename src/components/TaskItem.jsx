import "./TaskItem.css";
import { useRef } from "react";
import { IoReorderFourOutline } from "react-icons/io5";

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
  onDrop,
}) {
  const liRef = useRef(null);

  const handleDragImage = (e) => {
    onDragStart();
    e.dataTransfer.setDragImage(liRef.current, 20, 20);
  };

  return (
    <li
      ref={liRef}
      className="task-item"
      index={index}
      onDragOver={(e) => e.preventDefault()}
      onDrop={onDrop}
    >
      <span
        className="drag-handle"
        draggable={true}
        onDragStart={handleDragImage}
      >
        <IoReorderFourOutline />
      </span>

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
