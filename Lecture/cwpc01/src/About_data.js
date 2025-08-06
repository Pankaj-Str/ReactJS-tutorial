import { Component } from "react";

class About_data extends Component{


    render(){

        return(
            <div>
                <h1>Hello, {this.props.name}!</h1>
                <p>Welcome to {this.props.platform}.</p>
            </div>
        );


    }


}

export default About_data;