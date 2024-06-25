import React, { useState } from 'react';
function Header(){

    const [count, setCount] = useState(0);
    
    const style = {
        backgroundColor: "lightblue",
        fontSize: "16px",
        padding: "10px",
        textAlign: "center",
        color: "black",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        width:"300px",
      };

      function msg(){
        alert("Welcome to my website codeswithpankaj.com");
      }
      function handleIncrement() {
        setCount(count + 1);
      }


    return(

        <div>
            <div style={style}>Styled Component</div>
            <button onClick={msg}>Click me</button>
            <p>Count: {count}</p>
            <button onClick={handleIncrement}>Increment</button>
        </div>

    );

}

export default Header;