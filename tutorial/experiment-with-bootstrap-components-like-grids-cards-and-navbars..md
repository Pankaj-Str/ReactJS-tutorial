# Experiment with Bootstrap components like grids, cards, and navbars.

**By Codes With Pankaj**

***

### **Step 1: Create a React App (if not already created)**

If you don’t have a React app yet, create one by running:

```bash
npx create-react-app react-bootstrap-components
cd react-bootstrap-components
npm start
```

***

### **Step 2: Install Bootstrap**

Make sure Bootstrap is installed and imported in your project. If you haven't done this yet, follow the steps from the previous guide to **install Bootstrap** in your React app.

***

### **Step 3: Add a Navbar**

A **Navbar** is a great way to create a navigation menu for your app. Here's how to add a basic responsive navbar using Bootstrap:

1.  Open `src/App.js` and replace its content with the following code:

    ```javascript
    import React from 'react';
    import 'bootstrap/dist/css/bootstrap.min.css';

    function App() {
      return (
        <div>
          {/* Navbar Component */}
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">Codes With Pankaj</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <a className="nav-link" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Features</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Pricing</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">About</a>
                </li>
              </ul>
            </div>
          </nav>

          {/* Other content */}
          <div className="container">
            <h1 className="text-center mt-5">Welcome to Codes With Pankaj</h1>
          </div>
        </div>
      );
    }

    export default App;
    ```
2. **Explanation**:
   * `navbar navbar-expand-lg navbar-dark bg-dark`: These classes style the navbar with a dark background and make it responsive.
   * `navbar-toggler`: The button that toggles the navbar on smaller screens.
   * `navbar-nav`: This is used to list the navigation links.

***

### **Step 4: Add a Grid Layout**

Bootstrap’s **grid system** is a great way to organize content into columns and rows. Here’s how to use it:

1.  Below the navbar in `App.js`, add a grid layout:

    ```javascript
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <img src="https://via.placeholder.com/150" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Card 1</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src="https://via.placeholder.com/150" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Card 2</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src="https://via.placeholder.com/150" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Card 3</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    ```
2. **Explanation**:
   * `col-md-4`: Creates a column that takes up 4/12 of the available space on medium-sized screens and above.
   * `card`: A Bootstrap component used for displaying content in a flexible and concise container.
   * `card-body`, `card-title`, `card-text`: These classes are used to style the contents of each card.

***

### **Step 5: Add a Card Component**

In the above step, we already added some **cards** inside the grid layout. Here's a deeper dive into how to use the Bootstrap **Card** component:

1. Each **card** can contain different content such as images, titles, and text.
2. The `img` tag inside each card shows a placeholder image.

***

### **Step 6: Run Your Project**

1.  Start the development server if you haven't already:

    ```bash
    npm start
    ```
2. Open your browser at `http://localhost:3000`.

You should see:

* A **navbar** at the top of the page.
* A **grid layout** with three **cards**, each containing an image and text.

***

### **Conclusion**

You’ve successfully implemented several **Bootstrap components** in your React app:

* **Navbar** for navigation.
* **Grid Layout** to organize content.
* **Cards** to display information dynamically.

***

#### **Next Steps**

1. Learn how to **customize Bootstrap** with SCSS to change colors and layout styles.

Stay tuned for more tutorials on **Codes With Pankaj**! 😊

