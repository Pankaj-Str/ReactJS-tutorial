# Getting Started with React JS

#### **By Codes With Pankaj**

In this tutorial, we’ll learn how to **set up React** and create a simple app that prints **“Hello World”** on the screen.

***

### **What You Need Before Starting**

1. **Basic Knowledge**: Familiarity with JavaScript and HTML.
2. **Tools to Install**:
   * [Node.js](https://nodejs.org/) (comes with npm).
   * A text editor like **VS Code**.

***

### **Step-by-Step: Setting Up React**

#### **Step 1: Install Node.js**

1. Download **Node.js** from the official website: [https://nodejs.org/](https://nodejs.org/).
2.  Install Node.js and verify it by running the following commands in the terminal:

    ```bash
    node -v
    npm -v
    ```

    If installed correctly, these commands will display the versions of Node.js and npm.

***

#### **Step 2: Create a React App**

React provides a tool called **Create React App** to set up everything automatically.

1.  Open your terminal and run the following command:

    ```bash
    npx create-react-app hello-world-app
    ```

    * This command will create a folder named **hello-world-app** with all the necessary files.
    * The process might take a few minutes as it downloads dependencies.
2.  Navigate to your project folder:

    ```bash
    cd hello-world-app
    ```

***

#### **Step 3: Start the React App**

To start the React development server:

```bash
npm start
```

* This will open your app in the browser at `http://localhost:3000/`.
* By default, you’ll see the React logo and some boilerplate text.

***

### **Write Your First "Hello World" App**

1. Open the project folder in your text editor (**VS Code**).
2. Locate the file `src/App.js`.
3.  Replace the code inside `App.js` with the following:

    ```javascript
    import React from 'react';

    function App() {
      return (
        <div>
          <h1>Hello World!</h1>
          <p>Welcome to React with Codes With Pankaj!</p>
        </div>
      );
    }

    export default App;
    ```
4. Save the file.
5.  Go back to your browser. It will automatically refresh and display:

    ```
    Hello World!
    Welcome to React with Codes With Pankaj!
    ```

***

### **How It Works**

* **React Components**: The `App` function is a React **component** that returns HTML (written as JSX).
* **JSX**: Lets you write HTML inside JavaScript, making it easy to design the UI.
* **Live Reloading**: Any changes you make in the code automatically update the browser.

***

### **Wrapping Up**

You’ve successfully installed React and printed your first **“Hello World”** using React JS! 🎉

#### **What’s Next?**

In upcoming tutorials on **Codes With Pankaj**, you’ll learn to:

* Work with **props** and **state**.
* Add styles and make your app interactive.

