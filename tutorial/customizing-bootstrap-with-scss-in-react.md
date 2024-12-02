# Customizing Bootstrap with SCSS in React

## Learn how to customize Bootstrap with SCSS to change colors and layout styles.

#### **By Codes With Pankaj**

***

### **Step 1: Set Up a React Project with Bootstrap**

Before we dive into SCSS customization, ensure that you have a React app with Bootstrap already installed. If not, follow these steps:

1.  Create a new React app:

    ```bash
    npx create-react-app react-bootstrap-scss
    cd react-bootstrap-scss
    ```
2.  Install **Bootstrap** and **Sass**:

    ```bash
    npm install bootstrap sass
    ```

    * `bootstrap`: The Bootstrap framework for styling.
    * `sass`: To enable SCSS styling in your project.

***

### **Step 2: Enable SCSS in Your React App**

1. After installing `sass`, React will automatically support `.scss` files.
2. Rename the `src/App.css` file to `src/App.scss`.
3.  Open `src/index.js` and import the `App.scss` file instead of the default CSS:

    ```javascript
    import './App.scss';
    ```

***

### **Step 3: Import Bootstrap SCSS**

1.  Open the `src/App.scss` file and add the following line at the top to import Bootstrap's SCSS variables and styles:

    ```scss
    @import "~bootstrap/scss/bootstrap";
    ```

    This will import the full Bootstrap framework, including its default variables, mixins, and components, so we can override them.

***

### **Step 4: Customize Bootstrap SCSS Variables**

Bootstrap uses **Sass variables** to define key aspects of its design, such as colors, spacing, fonts, and more. To customize Bootstrap, you can modify these variables before importing Bootstrap's SCSS.

#### **Example 1: Change Primary Color**

1.  In the `src/App.scss` file, before the `@import "~bootstrap/scss/bootstrap";` line, you can customize the Bootstrap variables. For example, change the **primary color**:

    ```scss
    // Customizing Bootstrap Variables
    $primary: #ff6347;  // Set the primary color to Tomato

    // Import Bootstrap SCSS
    @import "~bootstrap/scss/bootstrap";
    ```

    This will change all the elements that use the primary color (e.g., buttons, links, etc.) to `#ff6347` (Tomato color).

***

#### **Example 2: Change Font and Spacing**

To change fonts and default spacing values (like padding and margins), you can modify the following variables:

```scss
// Customizing Fonts and Spacing
$font-family-base: 'Roboto', sans-serif;  // Change base font
$spacer: 1.5rem;  // Modify spacing between elements (e.g., margin/padding)

// Import Bootstrap SCSS
@import "~bootstrap/scss/bootstrap";
```

This will change the base font to **Roboto** and increase the default spacing used across the layout.

***

### **Step 5: Customize Specific Components**

You can also **override specific Bootstrap components**. For example, if you want to change the appearance of the **buttons**:

#### **Example 3: Customize Buttons**

```scss
// Customizing Button Styles
$btn-primary-bg: #00bcd4; // Set button background to Teal
$btn-primary-border: #00bcd4; // Set button border to Teal

// Import Bootstrap SCSS
@import "~bootstrap/scss/bootstrap";
```

This will change the primary button color to **Teal** (`#00bcd4`).

***

### **Step 6: Apply Your Custom Styles**

You can also add your custom styles directly in `App.scss` after importing Bootstrap:

#### **Example 4: Add Custom Styles for Your App**

```scss
// Custom Styles
body {
  background-color: #f8f9fa;  // Light background color
}

h1 {
  color: $primary;  // Use the customized primary color
}

.container {
  padding-top: 50px;
}
```

You can now use your **custom SCSS** in your React components and ensure that Bootstrap's default styling is overridden as needed.

***

### **Step 7: Run Your Project**

1.  Start the development server:

    ```bash
    npm start
    ```
2. Open your browser at `http://localhost:3000`. Your customizations should now be reflected in your app.

***

### **Summary of What You Can Customize:**

1. **Colors**: Modify `$primary`, `$secondary`, `$success`, etc., to change theme colors.
2. **Spacing**: Adjust `$spacer` and spacing variables for margins, padding, etc.
3. **Fonts**: Change `$font-family-base` for default fonts across the app.
4. **Components**: Customize specific Bootstrap components like buttons, forms, cards, etc.
5. **Layout**: Tweak grid behavior, container widths, and breakpoints.

***

### **Conclusion**

You’ve now learned how to customize **Bootstrap with SCSS** in your React app, which gives you complete control over the design and layout of your app.

#### .
