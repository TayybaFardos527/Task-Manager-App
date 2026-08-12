import React from 'react';

function TaskFilter({
  filter,
  setFilter,
  searchTerm,
  setSearchTerm,
  totalTasks,
  completedTasks,
}) {
  return (
    <div className="task-filter mb-4">
      {/* Search Bar */}
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search tasks..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Filter Buttons */}
      <div className="btn-group w-100 mb-3" role="group">
        <button
          type="button"
          className={`btn ${filter === 'all' ? 'btn-primary' : 'btn-outline-primary'}`}
          onClick={() => setFilter('all')}
        >
          All Tasks ({totalTasks})
        </button>
        <button
          type="button"
          className={`btn ${filter === 'pending' ? 'btn-primary' : 'btn-outline-primary'}`}
          onClick={() => setFilter('pending')}
        >
          Pending ({totalTasks - completedTasks})
        </button>
        <button
          type="button"
          className={`btn ${filter === 'completed' ? 'btn-primary' : 'btn-outline-primary'}`}
          onClick={() => setFilter('completed')}
        >
          Completed ({completedTasks})
        </button>
      </div>

      {/* Progress Bar */}
      <div className="progress mb-3">
        <div
          className="progress-bar bg-success"
          role="progressbar"
          style={{ width: `${totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0}%` }}
          aria-valuenow={completedTasks}
          aria-valuemin="0"
          aria-valuemax={totalTasks}
        >
          {totalTasks > 0 ? `${Math.round((completedTasks / totalTasks) * 100)}%` : '0%'}
        </div>
      </div>
    </div>
  );
}

export default TaskFilter;
