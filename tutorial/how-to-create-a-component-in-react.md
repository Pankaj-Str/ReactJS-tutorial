# How to Create a Component in React

#### **By Codes With Pankaj**

A **component** in React is a reusable piece of code that controls a part of the user interface (UI). In this tutorial, we’ll guide you through creating your first React component.

***

### **What You Need**

1. A React app set up (use `npx create-react-app my-app`).
2. A text editor like **VS Code**.
3. Basic knowledge of JavaScript and HTML.

***

### **Step-by-Step: Creating a Component**

#### **Step 1: Understand React Components**

React components are of two types:

* **Functional Components**: The simplest, written as JavaScript functions.
* **Class Components**: More complex, written using ES6 classes (rarely used in modern React).

In this tutorial, we’ll create a **Functional Component**.

***

#### **Step 2: Create a New File for the Component**

1. Inside your React app, go to the **`src`** folder.
2. Create a new file called `Greeting.js`.

***

#### **Step 3: Write the Functional Component**

1.  Open `Greeting.js` and write the following code:

    ```javascript
    import React from 'react';

    // Define the Greeting component
    function Greeting() {
      return (
        <div>
          <h2>Hello, Welcome to React!</h2>
          <p>This is your first custom component.</p>
        </div>
      );
    }

    export default Greeting;
    ```

    **Explanation**:

    * **`function Greeting()`**: This defines a functional component named `Greeting`.
    * **`return()`**: Returns the JSX (HTML-like code) that will be displayed.
    * **`export default Greeting`**: Makes this component available for use in other files.

***

#### **Step 4: Use the Component in App.js**

1. Open the `src/App.js` file.
2.  Import the `Greeting` component:

    ```javascript
    import Greeting from './Greeting';
    ```
3.  Use the `Greeting` component inside the `App` component:

    ```javascript
    function App() {
      return (
        <div>
          <h1>React App</h1>
          {/* Use the Greeting component */}
          <Greeting />
        </div>
      );
    }

    export default App;
    ```

    **Explanation**:

    * **`<Greeting />`**: This is how you use (render) a React component inside another component.

***

#### **Step 5: Start Your App**

Run the app to see your new component in action:

```bash
npm start
```

In the browser, you’ll see:

```
React App
Hello, Welcome to React!
This is your first custom component.
```

***

### **Congratulations! 🎉**

You’ve successfully created and used your first React component! Components are the building blocks of any React application, and you’ll use them to create amazing UIs.

***

### **What’s Next?**

In upcoming tutorials on **Codes With Pankaj**, you’ll learn:

* **Passing data to components using props**.
* **Adding interactivity using state**.

Stay tuned for more React tutorials designed just for you!

Let me know if you'd like further explanations or enhancements to this tutorial! 😊
