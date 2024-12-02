# How to Create Multiple Components in React

#### **By Codes With Pankaj**

In React, you can create multiple components to organize your code better and make your application scalable. Let’s learn how to create and use multiple components step-by-step.

***

### **What You Need**

1. A React app ready to go (`npx create-react-app my-app`).
2. A text editor (e.g., **VS Code**).
3. Basic knowledge of React functional components.

***

### **Step-by-Step: Creating Multiple Components**

#### **Step 1: Create a React App (if not done already)**

If you haven’t already set up your React app, use the following commands:

```bash
npx create-react-app my-app
cd my-app
npm start
```

***

#### **Step 2: Plan Your Components**

Let’s build a simple application with the following components:

1. **Header**: Displays the title of the app.
2. **Greeting**: Shows a welcome message.
3. **Footer**: Displays copyright information.

***

#### **Step 3: Create Component Files**

1. Inside the `src` folder, create three new files:
   * `Header.js`
   * `Greeting.js`
   * `Footer.js`

***

#### **Step 4: Write Code for Each Component**

**1. Header Component**

Open `Header.js` and add the following code:

```javascript
import React from 'react';

function Header() {
  return (
    <header>
      <h1>Welcome to React with Codes With Pankaj</h1>
    </header>
  );
}

export default Header;
```

***

**2. Greeting Component**

Open `Greeting.js` and write this code:

```javascript
import React from 'react';

function Greeting() {
  return (
    <div>
      <h2>Hello, World!</h2>
      <p>This is a beginner-friendly React tutorial.</p>
    </div>
  );
}

export default Greeting;
```

***

**3. Footer Component**

Open `Footer.js` and add the following:

```javascript
import React from 'react';

function Footer() {
  return (
    <footer>
      <p>&copy; 2024 Codes With Pankaj. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
```

***

#### **Step 5: Import and Use Components in `App.js`**

1. Open `App.js` in the `src` folder.
2.  Import all three components at the top of the file:

    ```javascript
    import React from 'react';
    import Header from './Header';
    import Greeting from './Greeting';
    import Footer from './Footer';
    ```
3.  Use these components inside the `App` function:

    ```javascript
    function App() {
      return (
        <div>
          <Header />
          <Greeting />
          <Footer />
        </div>
      );
    }

    export default App;
    ```

***

#### **Step 6: Run the App**

Start your React app to see the components in action:

```bash
npm start
```

***

### **What You’ll See in the Browser**

Your app should display the following:

1. **Header**: A title at the top.
2. **Greeting**: A welcome message.
3. **Footer**: Copyright information at the bottom.

Example output:

```
Welcome to React with Codes With Pankaj
Hello, World!
This is a beginner-friendly React tutorial.
© 2024 Codes With Pankaj. All rights reserved.
```

***

### **How This Works**

1. Each component (`Header`, `Greeting`, `Footer`) is written in its own file for better organization.
2. Components are imported into `App.js` and combined to build the final UI.
3. React makes it easy to create reusable components to keep your code clean and modular.

***

### **Next Steps**

Now that you know how to create multiple components, you can:

1. Learn how to **pass data between components** using **props**.
2. Make your components interactive using **state**.

Stay tuned for more React tutorials on **Codes With Pankaj**!

***
