import React, { useState } from 'react';

function TaskItem({ task, onDelete, onToggle, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(task.title);

  const handleEdit = () => {
    if (editValue.trim() === '') {
      alert('Task cannot be empty!');
      return;
    }
    onEdit(task.id, editValue);
    setIsEditing(false);
  };

  return (
    <li className="list-group-item task-item d-flex align-items-center justify-content-between">
      <div className="task-content d-flex align-items-center flex-grow-1">
        <input
          type="checkbox"
          className="form-check-input me-3"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />
        {isEditing ? (
          <input
            type="text"
            className="form-control form-control-sm"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            onBlur={handleEdit}
            onKeyPress={(e) => e.key === 'Enter' && handleEdit()}
            autoFocus
          />
        ) : (
          <span
            className={`task-title ${task.completed ? 'completed' : ''}`}
            onDoubleClick={() => setIsEditing(true)}
          >
            {task.title}
          </span>
        )}
      </div>
      <div className="task-actions">
        <button
          className="btn btn-sm btn-warning me-2"
          onClick={() => setIsEditing(!isEditing)}
          title="Edit task"
        >
          ✏️
        </button>
        <button
          className="btn btn-sm btn-danger"
          onClick={() => onDelete(task.id)}
          title="Delete task"
        >
          🗑️
        </button>
      </div>
    </li>
  );
}

export default TaskItem;
