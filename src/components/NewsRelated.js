import React, { Component } from 'react';

class NewsRelated extends Component {
    render() {
        return (
            <div className="card">
                <a href="/tin-chi-tiet"><img className="card-img-top" src="http://placehold.it/500x300/"></img></a>
                <div className="card-body">
                    <h4 className="card-title">Title</h4>
                    <p className="card-text">lorem abc</p>
                </div>
            </div>
        );
    }
}

export default NewsRelated;