# How to Create Class-Based Components in React

## **How to Create Class-Based Components in React**

#### **By Codes With Pankaj**

A **class-based component** in React is an older but still useful way to define components in React. Follow these steps to create and run a class-based component.

***

### **Step 1: Create a New React App**

If you haven’t already created a React app, follow these steps:

1. Open your terminal or command prompt.
2.  Run the following command:

    ```bash
    npx create-react-app my-class-component-app
    ```

    * This creates a new React app called `my-class-component-app`.
3.  Navigate to the app directory:

    ```bash
    cd my-class-component-app
    ```
4.  Start the development server:

    ```bash
    npm start
    ```

    * Your browser will open automatically at `http://localhost:3000` with the default React template.

***

### **Step 2: Create a Class-Based Component**

1. Inside the `src` folder, create a new file named `Welcome.js`.
2.  Add the following code to `Welcome.js`:

    ```javascript
    import React, { Component } from 'react';

    // Define a class-based component
    class Welcome extends Component {
      render() {
        return (
          <div>
            <h1>Welcome to React with Codes With Pankaj</h1>
            <p>This is a class-based component.</p>
          </div>
        );
      }
    }

    export default Welcome;
    ```

***

### **Step 3: Use the Class-Based Component in App.js**

1. Open the file `src/App.js`.
2.  Import the `Welcome` component at the top of the file:

    ```javascript
    import Welcome from './Welcome';
    ```
3.  Use the `Welcome` component inside the `App` component:

    ```javascript
    function App() {
      return (
        <div>
          <Welcome />
        </div>
      );
    }

    export default App;
    ```

***

### **Step 4: Run the Project**

1.  Go back to the terminal and ensure the app is running:

    ```bash
    npm start
    ```
2. Open your browser at `http://localhost:3000`.
   *   You should see the output:

       ```
       Welcome to React with Codes With Pankaj
       This is a class-based component.
       ```

***

### **Congratulations! 🎉**

You’ve successfully created a **class-based component** and displayed it in your React app.

***

Stay tuned for more tutorials from **Codes With Pankaj**! Let me know if you’d like to expand this tutorial. 😊
