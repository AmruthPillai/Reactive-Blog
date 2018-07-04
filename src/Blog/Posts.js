import React, { Component } from 'react';
import './Posts.css';

class Posts extends Component {
    constructor() {
        super();

        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            return response.json();
        }).then(result => {
            this.setState({
                posts: result
            })
        });
    }

    render() {
        return (
            <div className="container mt-3">
                { this.state.posts.map(post => {
                    return (
                        <div className="card my-3" key={ post.id }>
                            <div className="card-body">
                                <h3>{ post.title }</h3>
                                <p>{ post.body.repeat(2) }</p>
                            </div>
                        </div>
                    )
                }) }
            </div>
        );
    }
}

export default Posts;
