### create a simple React app that fetches and displays a list of users from an external API using hooks. 
We'll use the JSONPlaceholder API for this example.

### Step 1: Set Up Your React Environment

1. **Install Node.js**: Make sure you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/).

2. **Create a New React Project**: Use Create React App to set up a new project.
   ```bash
   npx create-react-app user-list-app
   cd user-list-app
   ```

3. **Start the Development Server**:
   ```bash
   npm start
   ```
   This will start the development server and open your new React app in your default browser.

### Step 2: Clean Up the Boilerplate Code

1. **Open the Project in Your Code Editor**: Open `user-list-app` in your favorite code editor (e.g., VSCode).

2. **Clean Up `src` Directory**: Delete unnecessary files to clean up the project structure. You can delete everything in the `src` directory except for `index.js` and `App.js`.

3. **Update `App.js`**: Simplify `App.js` to make it a clean starting point.
   ```javascript
   import React from 'react';

   function App() {
     return (
       <div className="App">
         <h1>User List</h1>
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

### Step 3: Creating the User List Component

1. **Create a New Component File**: Create a file named `UserList.js` in the `src` directory.
   ```javascript
   import React, { useState, useEffect } from 'react';

   function UserList() {
     const [users, setUsers] = useState([]);
     const [loading, setLoading] = useState(true);
     const [error, setError] = useState(null);

     useEffect(() => {
       fetch('https://jsonplaceholder.typicode.com/users')
         .then((response) => response.json())
         .then((data) => {
           setUsers(data);
           setLoading(false);
         })
         .catch((error) => {
           setError(error);
           setLoading(false);
         });
     }, []);

     if (loading) {
       return <p>Loading...</p>;
     }

     if (error) {
       return <p>Error: {error.message}</p>;
     }

     return (
       <div>
         <h2>User List</h2>
         <ul>
           {users.map((user) => (
             <li key={user.id}>
               {user.name} ({user.email})
             </li>
           ))}
         </ul>
       </div>
     );
   }

   export default UserList;
   ```

### Step 4: Use the User List Component in `App.js`

1. **Import and Use `UserList` Component**:
   ```javascript
   import React from 'react';
   import UserList from './UserList';

   function App() {
     return (
       <div className="App">
         <h1>User List</h1>
         <UserList />
       </div>
     );
   }

   export default App;
   ```

### Step 5: Adding Some Basic Styling

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

   ul {
     list-style-type: none;
     padding: 0;
   }

   li {
     margin: 10px 0;
     padding: 10px;
     border: 1px solid #ccc;
     border-radius: 5px;
   }
   ```

### Final Thoughts

You've now built a simple React application that fetches and displays a list of users from an external API using hooks. You've covered the use of `useState` and `useEffect` hooks for managing state and side effects in a functional component.
