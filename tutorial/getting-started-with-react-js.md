# Getting Started with React JS

#### **By Codes With Pankaj**

### **What is React JS?**

**React JS** is a popular **JavaScript library** used to build user interfaces (UIs). It’s developed by **Facebook** and is especially useful for building web applications that update dynamically without refreshing the page.

React is:

* **Fast**: Only updates what’s necessary.
* **Reusable**: Components can be reused in different parts of your app.
* **Scalable**: Perfect for small to large applications.

***

### **Key Features of React**

1. **Components**: Small, reusable pieces of code that represent parts of the UI.
2. **JSX (JavaScript XML)**: A syntax that lets you write HTML inside JavaScript.
3. **Virtual DOM**: React uses a lightweight copy of the DOM to improve performance.
4. **One-Way Data Binding**: Data flows in one direction, making it easier to debug.

***

### **Getting Started with React JS**

Follow these simple steps to create your first React app.

#### **Step 1: Install Node.js**

* Download and install **Node.js** from [nodejs.org](https://nodejs.org/).
*   Verify installation:

    ```bash
    node -v
    npm -v
    ```

#### **Step 2: Create a React App**

React provides a tool called **Create React App** for beginners.

*   Run the following command:

    ```bash
    npx create-react-app my-first-react-app
    cd my-first-react-app
    npm start
    ```
* Your first React app will open in your browser at `http://localhost:3000`.

***

### **Understanding the Folder Structure**

Here’s a simplified overview of the key files:

* **src/index.js**: The entry point of your app.
* **src/App.js**: Your main component. Modify this to change your app’s look.

***

### **Step 3: Create Your First React Component**

A component in React is like a function that returns HTML. Let’s create one:

#### **Example: Hello World Component**

1. Open `src/App.js`.
2.  Replace the code with this:

    ```javascript
    import React from 'react';

    function App() {
      return (
        <div>
          <h1>Welcome to React!</h1>
          <p>Learn React with Codes With Pankaj.</p>
        </div>
      );
    }

    export default App;
    ```
3. Save the file and see the changes in your browser.

***

### **Step 4: Add Props and State**

React allows components to:

* **Props**: Pass data between components.
* **State**: Track data that can change over time.

#### **Example: Dynamic Greeting**

1.  Create a new file `src/Greeting.js`:

    ```javascript
    import React from 'react';

    function Greeting(props) {
      return <h2>Hello, {props.name}!</h2>;
    }

    export default Greeting;
    ```
2.  Use the Greeting component in `App.js`:

    ```javascript
    import React from 'react';
    import Greeting from './Greeting';

    function App() {
      return (
        <div>
          <h1>Welcome to React!</h1>
          <Greeting name="Pankaj" />
        </div>
      );
    }

    export default App;
    ```
3.  The app will display:

    ```
    Hello, Pankaj!
    ```

***

### **Conclusion**

You’ve just built your first React app and learned about components, props, and state. With React, you can build amazing web applications quickly and efficiently.

Stay tuned for more tutorials on **React**, **JavaScript**, and other programming topics on **Codes With Pankaj**!
