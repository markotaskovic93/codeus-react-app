import React, { Component } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

class AllArticles extends Component{

    constructor(props){
        super(props);

        this.state = {

            articles: []

        }
    }

    componentWillMount(){

        Axios.get(`https://jsonplaceholder.typicode.com/posts/`)
             .then((response) => {
                
              this.setState({
                  articles: response.data 
              });

        });
    }



    render(){

        return(

            <div className="container">
                <div className="row">
                     <div className="col-12">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Title</th>
                                    <th scope="col">Body</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>

                                { this.state.articles.map( article => 

                                    <tr key={article.id}>
                                        <td>{ article.title }</td>
                                        <td>{ article.body }</td>
                                        <td><Link className="btn btn-primary" to={ "/article/" + article.id }>Article</Link></td>
                                    </tr> 
                                
                                )}
                                        
                            </tbody>
                        </table>
                     </div>
                </div>
            </div>

        );
    }
}

export default AllArticles;