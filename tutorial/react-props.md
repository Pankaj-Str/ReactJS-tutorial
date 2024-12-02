# React Props

#### **By Codes With Pankaj**

***

### **What Are Props in React?**

Props (short for "properties") are used to pass data from one component to another in React. They make components reusable and dynamic by allowing you to customize their behavior or display based on the passed data.

***

### **Key Points About Props**

1. **Read-Only**: Props cannot be modified by the component receiving them. They are immutable.
2. **Passed From Parent to Child**: Props are always passed down the component tree.
3. **Accessible via `this.props` in Class Components** or `props` in Functional Components.

***

### **Step-by-Step: Using Props in React**

#### **Step 1: Create a React App (if not already created)**

If you don’t have a React app, create one with:

```bash
npx create-react-app react-props-example
cd react-props-example
npm start
```

***

#### **Step 2: Create a Simple Component to Use Props**

1. Inside the `src` folder, create a new file called `Greeting.js`.
2.  Add the following code:

    ```javascript
    import React, { Component } from 'react';

    class Greeting extends Component {
      render() {
        return (
          <div>
            <h1>Hello, {this.props.name}!</h1>
            <p>Welcome to {this.props.platform}.</p>
          </div>
        );
      }
    }

    export default Greeting;
    ```

    **Explanation**:

    * `this.props.name`: Accesses the `name` prop passed to the `Greeting` component.
    * `this.props.platform`: Accesses the `platform` prop.

***

#### **Step 3: Use the Component in App.js**

1. Open `src/App.js`.
2.  Import the `Greeting` component:

    ```javascript
    import Greeting from './Greeting';
    ```
3.  Use the `Greeting` component with props:

    ```javascript
    function App() {
      return (
        <div>
          <Greeting name="Pankaj" platform="React.js" />
          <Greeting name="John" platform="Codes With Pankaj" />
        </div>
      );
    }

    export default App;
    ```

***

#### **Step 4: Run the Project**

1.  Start the app:

    ```bash
    npm start
    ```
2.  You’ll see the following output in your browser:

    ```
    Hello, Pankaj!
    Welcome to React.js.

    Hello, John!
    Welcome to Codes With Pankaj.
    ```

***

### **How Props Work**

1. **Parent-to-Child Data Flow**:
   * Props are passed from the parent component (`App`) to the child component (`Greeting`).
   *   For example:

       ```javascript
       <Greeting name="Pankaj" platform="React.js" />
       ```
2. **Accessing Props in the Child**:
   * The `Greeting` component receives `name` and `platform` as props and accesses them using `this.props.name` and `this.props.platform`.

***

### **Props in Functional Components**

You can also use props in functional components. Here's how:

1.  Modify `Greeting.js` to a functional component:

    ```javascript
    import React from 'react';

    function Greeting(props) {
      return (
        <div>
          <h1>Hello, {props.name}!</h1>
          <p>Welcome to {props.platform}.</p>
        </div>
      );
    }

    export default Greeting;
    ```
2. The result in the browser will remain the same.

***

### **Default Props**

You can define default values for props if they are not provided:

1.  Update the `Greeting` component:

    ```javascript
    Greeting.defaultProps = {
      name: 'Guest',
      platform: 'React',
    };
    ```
2.  Use the component without passing props:

    ```javascript
    <Greeting />
    ```
3.  Output:

    ```
    Hello, Guest!
    Welcome to React.
    ```

***

### **Prop Validation**

To ensure the correct data type for props, use **PropTypes**:

1.  Install `prop-types`:

    ```bash
    npm install prop-types
    ```
2.  Add PropTypes to `Greeting.js`:

    ```javascript
    import PropTypes from 'prop-types';

    Greeting.propTypes = {
      name: PropTypes.string.isRequired,
      platform: PropTypes.string.isRequired,
    };
    ```

    **Explanation**:

    * Ensures that `name` and `platform` are strings and required.
    * If props are missing or incorrect, a warning will appear in the console.

***

### **Why Use Props?**

1. **Reusable Components**: Pass different data to the same component.
2. **Dynamic Content**: Make components display different content based on input.
3. **Maintainable Code**: Keeps components simple and focused on rendering UI.

***

### **Congratulations! 🎉**

You now understand how to use **React Props** to create dynamic and reusable components.

***



Stay tuned for more React tutorials on **Codes With Pankaj**! 😊
