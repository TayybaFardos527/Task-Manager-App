import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskFilter from './components/TaskFilter';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Load tasks from localStorage on mount
  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Add a new task
  const addTask = (taskTitle) => {
    const newTask = {
      id: Date.now(),
      title: taskTitle,
      completed: false,
      createdAt: new Date().toLocaleDateString(),
    };
    setTasks([newTask, ...tasks]);
  };

  // Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // Toggle task completion
  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  // Edit a task
  const editTask = (id, newTitle) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, title: newTitle } : task
    ));
  };

  // Filter and search tasks
  const filteredTasks = tasks.filter(task => {
    const matchesFilter =
      filter === 'all' ||
      (filter === 'completed' && task.completed) ||
      (filter === 'pending' && !task.completed);

    const matchesSearch = task.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  return (
    <div className="app-container">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            {/* Header */}
            <div className="header-section mb-4">
              <h1 className="app-title">Task Manager</h1>
              <p className="app-subtitle">Stay organized and productive</p>
            </div>

            {/* Task Form */}
            <TaskForm onAddTask={addTask} />

            {/* Filter and Search */}
            <TaskFilter
              filter={filter}
              setFilter={setFilter}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              totalTasks={tasks.length}
              completedTasks={tasks.filter(t => t.completed).length}
            />

            {/* Task List */}
            <TaskList
              tasks={filteredTasks}
              onDeleteTask={deleteTask}
              onToggleTask={toggleTask}
              onEditTask={editTask}
            />

            {/* Empty State */}
            {filteredTasks.length === 0 && (
              <div className="empty-state text-center py-5">
                <p className="text-muted">No tasks found. Create one to get started!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
