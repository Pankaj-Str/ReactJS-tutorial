# How to Create Multiple Class-Based Components in a Single File in React

#### **By Codes With Pankaj**

***

### **Step 1: Create a New React App (if not already created)**

If you don’t have a React app yet, create one with:

```bash
npx create-react-app single-file-class-components
cd single-file-class-components
npm start
```

***

### **Step 2: Plan the Components**

We’ll create the following components in a single file:

1. **Header**: Displays the title of the app.
2. **Content**: Displays the main body text.
3. **Footer**: Displays the footer information.

***

### **Step 3: Create and Define Multiple Class Components in One File**

1. Open the `src/App.js` file (you can use this file to define multiple components).
2. Replace its content with the following code:

```javascript
import React, { Component } from 'react';

// Header Component
class Header extends Component {
  render() {
    return (
      <header>
        <h1>Welcome to Codes With Pankaj</h1>
      </header>
    );
  }
}

// Content Component
class Content extends Component {
  render() {
    return (
      <main>
        <p>This is the main content of the page, created with a class-based component!</p>
      </main>
    );
  }
}

// Footer Component
class Footer extends Component {
  render() {
    return (
      <footer>
        <p>&copy; 2024 Codes With Pankaj. All rights reserved.</p>
      </footer>
    );
  }
}

// Main App Component (Combines All)
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
```

***

#### **Explanation**

1. **Header**, **Content**, and **Footer** are class-based components defined in a single file (`App.js`).
2. The main `App` component uses these components to assemble the app.
3. Each class component has its own `render()` method that defines its UI.

***

### **Step 4: Run the Project**

1.  Start the development server:

    ```bash
    npm start
    ```
2. Open your browser at `http://localhost:3000`.

***

### **Output**

You’ll see:

```
Welcome to Codes With Pankaj
This is the main content of the page, created with a class-based component!
© 2024 Codes With Pankaj. All rights reserved.
```

***

### **Why Use Multiple Class Components in a Single File?**

* **Simpler for Small Projects**: Keeps all related components in one place.
* **Better Organization**: Useful when components are tightly related or part of the same module.
* **Avoid Overhead**: Fewer files to manage in small applications.

***

### **Best Practices**

1. Use this approach for **small projects or related components**.
2. For **larger apps**, define each component in its own file to keep the code modular and maintainable.

***

### **Congratulations! 🎉**

You’ve successfully created **multiple class-based components in a single file** and used them in your React app.
