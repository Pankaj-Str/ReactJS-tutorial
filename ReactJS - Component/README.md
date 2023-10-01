# ReactJS - Component

In React, components are the building blocks of a user interface. They are reusable, self-contained pieces of code that can represent parts of a web page or user interface. Components in React can be either functional or class-based, and they encapsulate both the structure and behavior of a part of the UI.

## Type of ReactJS - Component

In React, there are two main types of components: functional components and class-based components. Additionally, there's another type called a PureComponent that is a variant of class-based components. Let's explore each type:

1. **Functional Components:**

   Functional components are also known as stateless components or functional stateless components. They are the simplest type of React components. These components are defined as JavaScript functions that return JSX to describe the UI. Functional components are primarily used for rendering UI based on props and can't manage their own state or lifecycle methods. However, with the introduction of React Hooks, functional components can now manage state and have lifecycle-like behavior.

   Example of a functional component:

   ```jsx
   import React from "react";

   function MyFunctionalComponent(props) {
     return <div>{props.message}</div>;
   }

   export default MyFunctionalComponent;
   ```

2. **Class-Based Components:**

   Class-based components are the older way of creating components in React. They are defined as ES6 classes and extend the `React.Component` class. Class-based components can manage their own state and have access to lifecycle methods like `componentDidMount`, `componentDidUpdate`, etc. They are still used in some legacy codebases but have been largely replaced by functional components, especially with the introduction of React Hooks.

   Example of a class-based component:

   ```jsx
   import React, { Component } from "react";

   class MyClassComponent extends Component {
     render() {
       return <div>{this.props.message}</div>;
     }
   }

   export default MyClassComponent;
   ```

3. **PureComponents:**

   PureComponent is a variant of class-based components. A PureComponent performs a shallow comparison of props and state and re-renders only if they have changed. This can improve performance by preventing unnecessary re-renders when the component's props or state haven't changed. PureComponent is typically used when you want to optimize rendering in scenarios where re-rendering might be computationally expensive.

   Example of a PureComponent:

   ```jsx
   import React, { PureComponent } from "react";

   class MyPureComponent extends PureComponent {
     render() {
       return <div>{this.props.message}</div>;
     }
   }

   export default MyPureComponent;
   ```

4. **React.memo (Functional Component Optimization):**

   While not a component type per se, the `React.memo` higher-order component (HOC) can be used with functional components to achieve similar performance optimizations as PureComponent. It memoizes the functional component, preventing unnecessary re-renders when the props haven't changed.

   Example of a memoized functional component:

   ```jsx
   import React from "react";

   const MyMemoizedComponent = React.memo(function(props) {
     return <div>{props.message}</div>;
   });

   export default MyMemoizedComponent;
   ```

In modern React development, functional components are the preferred choice due to their simplicity and the ability to use React Hooks for managing state and lifecycle-like behavior. However, class-based components and PureComponent may still be encountered in existing codebases or specific optimization scenarios.
