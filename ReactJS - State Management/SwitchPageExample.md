# React Component State Example Switch the page

React component that uses state to switch the content on the page. In this example, we'll create a component with two buttons, and clicking each button will display different content on the page.

First, make sure you have React and ReactDOM set up in your project. If not, you can create a new React app using Create React App or set up a React environment manually.

Here's the code for the component:

```jsx
import React, { Component } from 'react';

class PageSwitcher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 'page1', // Initial page
    };
  }

  handlePageChange = (pageName) => {
    this.setState({ currentPage: pageName });
  };

  render() {
    const { currentPage } = this.state;

    return (
      <div>
        <h1>Page Switcher Example</h1>
        <div>
          <button onClick={() => this.handlePageChange('page1')}>Page 1</button>
          <button onClick={() => this.handlePageChange('page2')}>Page 2</button>
        </div>
        <div>
          {currentPage === 'page1' && <p>This is Page 1 content.</p>}
          {currentPage === 'page2' && <p>This is Page 2 content.</p>}
        </div>
      </div>
    );
  }
}

export default PageSwitcher;
```

In this example:

1. We create a `PageSwitcher` class component with a constructor that initializes the `currentPage` state to 'page1'.

2. We define a `handlePageChange` method that updates the `currentPage` state when a button is clicked.

3. In the `render` method, we render two buttons that call `handlePageChange` when clicked. The content displayed on the page depends on the value of `currentPage`.

4. We conditionally render different content based on the value of `currentPage`.

You can include this component in your React application and see how it allows you to switch between different pages or content by clicking the buttons. Make sure to import and render the `PageSwitcher` component in your main application file.
