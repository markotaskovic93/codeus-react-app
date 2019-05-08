import React, { Component } from "react";

const height = {
    height: '100vh'
}

class Home extends Component{

    render(){

        return(

            <div className="container" style={ height }>
                <div className="row h-100">
                    <div className="col-12 align-self-center text-center">
                        <h3>Codeus REST React App</h3>
                    </div>
                </div>
            </div>

        );
    }
}

export default Home;