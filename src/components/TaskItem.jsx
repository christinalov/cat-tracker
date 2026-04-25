import "./TaskItem.css";
import { useRef } from "react";
import { IoReorderFourOutline } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md";

const TaskItem = ({
  name,
  index,
  label,
  task,
  onChange,
  onDragStart,
  onDrop,
}) => {
  const liRef = useRef(null);

  const handleDragImage = (e) => {
    onDragStart();
    e.dataTransfer.setDragImage(liRef.current, 20, 20);
  };

  return (
    <li
      ref={liRef}
      className="task-item"
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

      <div className="content">
        <label>{task.label}</label>

        {task.inputs.map((input) => (
          <input
            key={input.id}
            type={input.type}
            value={input.value || ""}
            onChange={(e) => onChange(task.id, input.id, e.target.value)}
          />
        ))}
      </div>

      <button className="delete-icon">
        <MdDeleteOutline />
      </button>
    </li>
  );
};

export default TaskItem;
