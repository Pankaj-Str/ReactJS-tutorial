### create a simple React app using hooks. We'll build a basic to-do list application.

### Step 1: Set Up Your React Environment

1. **Install Node.js**: Make sure you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/).

2. **Create a New React Project**: Use Create React App to set up a new project.
   ```bash
   npx create-react-app my-todo-app
   cd my-todo-app
   ```

3. **Start the Development Server**:
   ```bash
   npm start
   ```
   This will start the development server and open your new React app in your default browser.

### Step 2: Clean Up the Boilerplate Code

1. **Open the Project in Your Code Editor**: Open `my-todo-app` in your favorite code editor (e.g., VSCode).

2. **Clean Up `src` Directory**: Delete unnecessary files to clean up the project structure. You can delete everything in the `src` directory except for `index.js` and `App.js`.

3. **Update `App.js`**: Simplify `App.js` to make it a clean starting point.
   ```javascript
   import React from 'react';

   function App() {
     return (
       <div className="App">
         <h1>My To-Do List</h1>
       </div>
     );
   }

   export default App;
   ```

4. **Update `index.css`**: You can customize the styling or keep it minimal for now.
   ```css
   body {
     font-family: Arial, sans-serif;
     padding: 0;
     margin: 0;
   }

   .App {
     text-align: center;
     margin-top: 50px;
   }
   ```

### Step 3: Creating the To-Do List Component

1. **Create a New Component File**: Create a file named `TodoList.js` in the `src` directory.
   ```javascript
   import React, { useState } from 'react';

   function TodoList() {
     const [todos, setTodos] = useState([]);
     const [newTodo, setNewTodo] = useState('');

     const handleAddTodo = () => {
       if (newTodo.trim() !== '') {
         setTodos([...todos, newTodo]);
         setNewTodo('');
       }
     };

     return (
       <div>
         <h2>To-Do List</h2>
         <input
           type="text"
           value={newTodo}
           onChange={(e) => setNewTodo(e.target.value)}
           placeholder="Add a new task"
         />
         <button onClick={handleAddTodo}>Add</button>
         <ul>
           {todos.map((todo, index) => (
             <li key={index}>{todo}</li>
           ))}
         </ul>
       </div>
     );
   }

   export default TodoList;
   ```

### Step 4: Use the To-Do List Component in `App.js`

1. **Import and Use `TodoList` Component**:
   ```javascript
   import React from 'react';
   import TodoList from './TodoList';

   function App() {
     return (
       <div className="App">
         <h1>My To-Do List</h1>
         <TodoList />
       </div>
     );
   }

   export default App;
   ```

### Step 5: Adding Delete Functionality

1. **Update `TodoList.js` to Add Delete Functionality**:
   ```javascript
   import React, { useState } from 'react';

   function TodoList() {
     const [todos, setTodos] = useState([]);
     const [newTodo, setNewTodo] = useState('');

     const handleAddTodo = () => {
       if (newTodo.trim() !== '') {
         setTodos([...todos, newTodo]);
         setNewTodo('');
       }
     };

     const handleDeleteTodo = (index) => {
       const newTodos = todos.filter((_, i) => i !== index);
       setTodos(newTodos);
     };

     return (
       <div>
         <h2>To-Do List</h2>
         <input
           type="text"
           value={newTodo}
           onChange={(e) => setNewTodo(e.target.value)}
           placeholder="Add a new task"
         />
         <button onClick={handleAddTodo}>Add</button>
         <ul>
           {todos.map((todo, index) => (
             <li key={index}>
               {todo}
               <button onClick={() => handleDeleteTodo(index)}>Delete</button>
             </li>
           ))}
         </ul>
       </div>
     );
   }

   export default TodoList;
   ```

### Step 6: Adding Local Storage

1. **Update `TodoList.js` to Save and Load Todos from Local Storage**:
   ```javascript
   import React, { useState, useEffect } from 'react';

   function TodoList() {
     const [todos, setTodos] = useState(() => {
       const savedTodos = localStorage.getItem('todos');
       return savedTodos ? JSON.parse(savedTodos) : [];
     });
     const [newTodo, setNewTodo] = useState('');

     useEffect(() => {
       localStorage.setItem('todos', JSON.stringify(todos));
     }, [todos]);

     const handleAddTodo = () => {
       if (newTodo.trim() !== '') {
         setTodos([...todos, newTodo]);
         setNewTodo('');
       }
     };

     const handleDeleteTodo = (index) => {
       const newTodos = todos.filter((_, i) => i !== index);
       setTodos(newTodos);
     };

     return (
       <div>
         <h2>To-Do List</h2>
         <input
           type="text"
           value={newTodo}
           onChange={(e) => setNewTodo(e.target.value)}
           placeholder="Add a new task"
         />
         <button onClick={handleAddTodo}>Add</button>
         <ul>
           {todos.map((todo, index) => (
             <li key={index}>
               {todo}
               <button onClick={() => handleDeleteTodo(index)}>Delete</button>
             </li>
           ))}
         </ul>
       </div>
     );
   }

   export default TodoList;
   ```

### Step 7: Styling Your Application

1. **Update `App.css` for Basic Styling**:
   ```css
   body {
     font-family: Arial, sans-serif;
     padding: 0;
     margin: 0;
   }

   .App {
     text-align: center;
     margin-top: 50px;
   }

   input {
     padding: 10px;
     font-size: 16px;
     margin-right: 10px;
   }

   button {
     padding: 10px 20px;
     font-size: 16px;
   }

   ul {
     list-style-type: none;
     padding: 0;
   }

   li {
     display: flex;
     justify-content: space-between;
     align-items: center;
     padding: 10px;
     border-bottom: 1px solid #ccc;
   }

   li button {
     background: red;
     color: white;
     border: none;
     padding: 5px 10px;
     cursor: pointer;
   }
   ```

### Final Thoughts

Congratulations! You've built a basic to-do list application using React hooks. You've covered the use of `useState` and `useEffect` hooks, added local storage functionality, and styled the application.

