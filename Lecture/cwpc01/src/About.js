import About_data from './About_data'
import Data from './Data';
function About(){

    return(
       <div>
            <About_data name="Pankaj" platform="React.js" />
            <About_data name="John" platform="Codes With Pankaj" />
            <h1>Employee Data </h1>
            <Data></Data>
        </div>
    );


}

export default About;