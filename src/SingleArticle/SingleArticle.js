import React, { Component } from "react";
import Axios from "axios";

class SingleArticle extends Component{

    constructor(props){
        super(props);

        this.state = {

            articles: []

        }
    }

    componentWillMount(){

        const articleId = this.props.match.params.id;

        Axios.get(`https://jsonplaceholder.typicode.com/posts/${articleId}`)
             .then((response) => {

              this.setState({
                  articles: response.data 
              });

        });
    }


    render(props){

        return(

            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1>{ this.state.articles.title }</h1>
                        <p>{ this.state.articles.body} </p>
                    </div>
                </div>
            </div>

        );

    }

}

export default SingleArticle;