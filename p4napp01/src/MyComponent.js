function MyComponents(){

    function handleButtonClick(id) {    
        alert(`Button with ID ${id} clicked!`);
      }

      function handleSubmit() {
          const  demo = document.getElementById("demo").value;
            alert(`Form submitted with value: ${demo}`)
    }     
    return(
        <div>
            
            <button onClick={() => handleButtonClick(1)}>Button 1</button>
            <button onClick={() => handleButtonClick(2)}>Button 2</button>
            <hr>
            </hr>
            <form onSubmit={handleSubmit}>
            <input type="text" id="demo" value="joy"/>
            <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default MyComponents;