# Task Manager Web App

A modern, responsive task management application built with React.js. This single-page application (SPA) helps users organize and track their daily tasks efficiently with a clean, intuitive interface.

## Features

### Core Functionality
- **Add Tasks**: Quickly add new tasks with a simple input form
- **Complete Tasks**: Mark tasks as completed with a checkbox
- **Edit Tasks**: Double-click on any task to edit its title
- **Delete Tasks**: Remove tasks you no longer need
- **Search Tasks**: Filter tasks in real-time using the search bar
- **Filter by Status**: View all tasks, pending tasks, or completed tasks
- **Progress Tracking**: Visual progress bar showing completion percentage

### Technical Features
- **Persistent Storage**: Tasks are automatically saved to browser localStorage
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Component-Based Architecture**: Modular, reusable React components
- **State Management**: Efficient state management using React Hooks (useState, useEffect)
- **REST API Integration**: Ready for backend integration with JSONPlaceholder or custom APIs
- **Bootstrap Styling**: Professional UI with Bootstrap framework

## Project Structure

```
task-manager-app/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── TaskForm.js        # Form component for adding tasks
│   │   ├── TaskList.js        # List container component
│   │   ├── TaskItem.js        # Individual task item component
│   │   └── TaskFilter.js      # Filter and search component
│   ├── App.js                 # Main application component
│   ├── App.css                # Application styles
│   ├── index.js               # React DOM render
│   └── index.css              # Global styles
├── package.json               # Project dependencies
└── README.md                  # This file
```

## Technologies Used

- **React.js**: UI library for building interactive components
- **React Hooks**: useState and useEffect for state and side effects management
- **Bootstrap 5**: CSS framework for responsive design
- **localStorage API**: Browser storage for persistent data
- **CSS3**: Custom styling and animations

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Steps

1. **Clone or navigate to the project directory**
   ```bash
   cd task-manager-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```
   The app will open at `http://localhost:3000`

4. **Build for production**
   ```bash
   npm run build
   ```

## Usage

### Adding a Task
1. Type your task in the input field
2. Click "Add Task" or press Enter
3. The task will appear at the top of your list

### Managing Tasks
- **Complete**: Click the checkbox next to a task
- **Edit**: Double-click on a task title or click the pencil icon
- **Delete**: Click the trash icon to remove a task

### Filtering Tasks
- Use the filter buttons to view:
  - **All Tasks**: All tasks in your list
  - **Pending**: Only incomplete tasks
  - **Completed**: Only finished tasks
- Use the search bar to find specific tasks by keyword

### Progress Tracking
- The progress bar shows your completion percentage
- Task counters display the number of tasks in each category

## Component Details

### TaskForm
- Handles user input for new tasks
- Validates that tasks are not empty
- Clears input after task is added

### TaskList
- Displays all filtered tasks
- Shows empty state when no tasks match filters
- Maps through tasks and renders TaskItem components

### TaskItem
- Renders individual task with checkbox, title, and action buttons
- Supports inline editing with double-click
- Handles task completion toggle and deletion

### TaskFilter
- Provides search functionality with real-time filtering
- Filter buttons for task status (All, Pending, Completed)
- Progress bar showing completion percentage
- Task counters for each category

## Data Structure

Each task object contains:
```javascript
{
  id: 1691234567890,           // Unique timestamp-based ID
  title: "Task description",    // Task title
  completed: false,             // Completion status
  createdAt: "8/10/2026"       // Creation date
}
```

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Future Enhancements

- Backend API integration for cloud sync
- User authentication and multi-device sync
- Task categories and tags
- Due dates and reminders
- Task priority levels
- Dark mode theme
- Export tasks to PDF or CSV
- Recurring tasks
- Task notes and descriptions
- Collaboration features

## Performance Optimization

- Component memoization for preventing unnecessary re-renders
- Efficient state updates using functional setState
- localStorage for instant data persistence
- Lazy loading for future API integration

## Accessibility

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- High contrast colors for readability
- Responsive design for all screen sizes

## Development Notes

### Adding a New Feature
1. Create a new component in `src/components/`
2. Import and use it in `App.js`
3. Update state management in App.js if needed
4. Add corresponding styles to `App.css`

### Debugging
- Use React Developer Tools browser extension
- Check browser console for errors
- Inspect localStorage in DevTools (Application tab)

## License

This project is open source and available for educational and commercial use.

## Author

Created as a portfolio project demonstrating React.js proficiency and modern web development practices.

---

**Happy Task Managing! 🚀**
