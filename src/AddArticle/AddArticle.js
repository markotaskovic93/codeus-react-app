import React, { Component } from "react";
import "./AddArticle.css";
import Axios from "axios";

class AddArticle extends Component{

    constructor(props){
        super(props);

        this.state = {

            title: '',
            body: '',
            userId: 1

        }

        this.onchange = this.onchange.bind(this);
    }

    onchange(e){
        this.setState({
            [ e.target.name ]: e.target.value
        });
    }


    formSubmit(e){

        e.preventDefault();

        Axios.post("https://jsonplaceholder.typicode.com/posts", 
        {   
            
                title: this.state.title,
                body: this.state.body,
                userId: this.state.userId
            
        }, 
        {
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(response => console.log(response));

    }

    render(){

        return(

            <div className="container addArticle-section">
                <div className="row">
                    <div className="col-6 offset-3 text-center form-group">
                        <h4>Add New Article</h4><br></br>
                        <form onSubmit={this.formSubmit}>
                            <input onChange={this.onchange} className="form-control" type="text" name="title" placeholder="Enter Title" /><br></br>
                            <textarea onChange={this.onchange} className="form-control" name="body" placeholder="Enter Title"></textarea><br></br>
                            <button className="btn btn-primary">Add New Article</button>
                        </form>
                    </div>
                </div>
            </div>

        );

    }

}

export default AddArticle;