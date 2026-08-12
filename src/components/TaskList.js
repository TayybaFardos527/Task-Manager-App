import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, onDeleteTask, onToggleTask, onEditTask }) {
  return (
    <div className="task-list">
      {tasks.length > 0 ? (
        <ul className="list-group">
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onDelete={onDeleteTask}
              onToggle={onToggleTask}
              onEdit={onEditTask}
            />
          ))}
        </ul>
      ) : (
        <div className="alert alert-info text-center" role="alert">
          No tasks to display. Add one to get started!
        </div>
      )}
    </div>
  );
}

export default TaskList;
