import React, { useState } from 'react';

function TaskForm({ onAddTask }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') {
      alert('Please enter a task!');
      return;
    }
    onAddTask(inputValue);
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit} className="task-form mb-4">
      <div className="input-group">
        <input
          type="text"
          className="form-control form-control-lg"
          placeholder="Add a new task..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="btn btn-primary btn-lg" type="submit">
          Add Task
        </button>
      </div>
    </form>
  );
}

export default TaskForm;
